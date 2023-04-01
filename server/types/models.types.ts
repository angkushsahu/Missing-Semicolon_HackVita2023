import { Document, Types } from "mongoose";

export interface IReturnUser extends Document {
    name: string;
    email: string;
    type: "user" | "transport" | "storage";
    phone: string;
    zone?: string;
    state?: string;
    locality?: string;
}

export interface IUser extends IReturnUser {
    password: string;
    resetPassword: string;
    getUser(): IReturnUser;
    comparePassword(enteredPassword: string): Promise<boolean>;
    getJWTToken(): string;
    encryptResetToken(): string;
}

export interface IProductType {
    name: string;
    description: string;
    weight: number;
    type: string;
    cost: number;
    unit: string;
    location: string;
    image: string;
}

export interface IProduct extends Omit<IProductType, "image">, Document {
    creator: string | Types.ObjectId;
    image: {
        picture: string;
        publicUrl: string;
    };
}
