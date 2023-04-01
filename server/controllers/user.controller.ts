import { Request, Response, NextFunction } from "express";
import { tokenName } from "../constants";
import { catchAsyncErrors } from "../middlewares";
import { User } from "../models";
import { IUpdateUser } from "../types";
import { ErrorHandler, validateEmail } from "../utils";

export const getUser = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "User found successfully",
        user: res.typedLocals.user.getUser(),
    });
});

export const getUserById = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "User found successfully",
        user: res.typedLocals.user.getUser(),
    });
});

export const changePassword = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { password }: { password: string } = req.body;
    if (!password) {
        return next(new ErrorHandler("Please enter a password to reset", 400));
    }

    const user = res.typedLocals.user;
    user.password = password;
    await user.save();

    res.status(200).json({ success: true, message: "Password updated successfully" });
});

export const userLogout = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie(tokenName);
    res.status(200).json({
        success: true,
        message: "User logged out successfully",
    });
});

export const deleteUserAccount = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    const user = res.typedLocals.user;
    res.clearCookie(tokenName);
    await user.deleteOne();

    res.status(200).json({ success: true, message: "User account deleted successfully" });
});

export const updateUserDetails = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    const { email }: IUpdateUser = req.body;
    if (email && !validateEmail(email)) {
        return next(new ErrorHandler("Please enter a valid e-mail ID", 400));
    }

    const user = res.typedLocals.user;
    const newDetails = req.body;
    delete newDetails["password"];
    const updatedUser = await User.findByIdAndUpdate(user._id, newDetails, { new: true });
    if (!updatedUser) {
        return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({ success: true, message: "User updated successfully", user: updatedUser.getUser() });
});

export const getAllStorageUnits = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    const resultPerPage = 8;
    const totalStorageUnits = await User.countDocuments({ type: "storage" });
    const { page, location } = req.query;
    const searchItems = location
        ? {
              location: { $regex: location, $options: "i" },
          }
        : {};

    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    const storageUnits = await User.find({ ...searchItems, type: "storage" })
        .skip(skip)
        .limit(resultPerPage);

    res.status(200).json({
        success: true,
        message: `Fetched all storage units in ${location}`,
        totalStorageUnits,
        resultPerPage,
        storageUnits,
    });
});

export const getAllTransport = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    const resultPerPage = 8;
    const totalTransports = await User.countDocuments({ type: "transport" });
    const { page, location } = req.query;
    const searchItems = location
        ? {
              location: { $regex: location, $options: "i" },
          }
        : {};

    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    const transports = await User.find({ ...searchItems, type: "transport" })
        .skip(skip)
        .limit(resultPerPage);

    res.status(200).json({
        success: true,
        message: `Fetched all transport units in ${location}`,
        totalTransports,
        resultPerPage,
        transports,
    });
});
