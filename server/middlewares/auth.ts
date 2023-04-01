import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IDecodedToken } from "../types";
import { ErrorHandler } from "../utils";
import { User } from "../models";
import catchAsyncErrors from "./catchAsyncErrors";
import { tokenName } from "../constants";

const isUserAuthenticated = catchAsyncErrors(async function (req: Request, res: Response, next: NextFunction) {
    // const token = req.cookies[tokenName];
    const token = req.cookies?.cultivateExchangeToken;
    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const data = <IDecodedToken>verify(token, String(process.env.JWT_SECRET));
    if (!data) {
        return next(new ErrorHandler("Token not found", 404));
    }
    const user = await User.findById(data.id);
    // console.log(user);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.typedLocals.user = user;

    next();
});

export default isUserAuthenticated;
