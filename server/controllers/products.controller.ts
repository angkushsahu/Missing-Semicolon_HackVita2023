import { NextFunction, Request, Response } from "express";
import { catchAsyncErrors } from "../middlewares";
import { cloudinaryConfig, ErrorHandler } from "../utils";
import { IProductType } from "../types";
import { Product } from "../models";

export const getAllProducts = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const resultPerPage = 8;
    const totalProducts = await Product.countDocuments();
    const { page, type } = req.query;
    const searchItems = type
        ? {
              $or: [{ name: { $regex: type, $options: "i" } }, { type: { $regex: type, $options: "i" } }],
          }
        : {};

    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    const products = await Product.find({ ...searchItems })
        .skip(skip)
        .limit(resultPerPage);

    res.status(200).json({
        success: true,
        message: "Fetched all products",
        totalProducts,
        resultPerPage,
        products,
    });
});

export const getAllProductsCreatedByMe = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const resultPerPage = 8;
    const userId = res.typedLocals.user.id;
    const totalProducts = await Product.countDocuments({ creator: userId });
    const { page } = req.query;

    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    const products = await Product.find({ creator: userId }).skip(skip).limit(resultPerPage);

    res.status(200).json({
        success: true,
        message: "Fetched all products",
        totalProducts,
        resultPerPage,
        products,
    });
});

export const createProduct = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    const { image }: IProductType = req.body;

    let picture: string = "";
    let publicUrl: string = "";
    if (image) {
        const uploadImage = await cloudinaryConfig.uploader.upload(image, {
            folder: "kheti-bazaar",
            use_filename: true,
        });
        picture = uploadImage.secure_url;
        publicUrl = uploadImage.public_id;
    }

    const id = res.typedLocals.user.id;
    const productObject = { ...req.body, creator: id, image: { picture, publicUrl } };
    const product = await Product.create(productObject);
    if (!product) {
        return next(new ErrorHandler("Unable to create product, internal server error", 404));
    }

    res.status(201).json({ success: true, message: "Created product successfully", product });
});

export const updateProduct = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const userId = res.typedLocals.user.id;

    let product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    if (userId !== product.id) {
        return next(new ErrorHandler("You are not authorised to perform this action", 403));
    }

    const updatedDetails = req.body;
    delete updatedDetails["password"];
    product = await Product.findByIdAndUpdate(id, updatedDetails, { new: true });
    if (!product) {
        return next(new ErrorHandler("Unable to update product, internal server error", 500));
    }

    res.status(200).json({ success: true, message: "Product updatd successfully", product });
});

export const deleteProduct = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    const userId = res.typedLocals.user.id;
    if (userId !== product.id) {
        return next(new ErrorHandler("You are not authorised to perform this action", 403));
    }

    if (product.image && product.image.publicUrl) {
        await cloudinaryConfig.uploader.destroy(product.image.publicUrl);
    }

    await product.deleteOne();
    res.status(200).json({ success: true, message: "Product deleted successfully" });
});

export const getProduct = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({ success: true, message: "Product found successfully", product });
});
