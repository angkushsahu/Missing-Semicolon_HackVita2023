import { Schema, Types, model } from "mongoose";
import { IProduct } from "../types";

const productSchema = new Schema(
    {
        creator: { type: Types.ObjectId, ref: "User", required: [true, "Please enter id of the creator"] },
        name: { type: String, required: [true, "Please enter product name"] },
        type: { type: String, required: [true, "Please enter product type"] },
        unit: { type: String, required: [true, "Please enter the unit for sale"] },
        cost: { type: Number, required: [true, "Please enter cost per unit of the product"] },
        weight: { type: Number, required: [true, "Please enter available weight of the product"] },
        location: { type: String, required: [true, "Please enter product availability area"] },
        description: { type: String, required: [true, "Please enter product description"] },
        image: {
            picture: { type: String, required: [true, "Please enter product image"] },
            publicUrl: { type: String, required: [true, "Please enter product image public url"] },
        },
    },
    { timestamps: true }
);

export default model<IProduct>("Product", productSchema);
