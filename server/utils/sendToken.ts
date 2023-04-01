import { Response } from "express";
import { tokenName } from "../constants";
import { IUser } from "../types";

const sendToken = function (res: Response, user: IUser, statusCode: number, message: string) {
    const token = user.getJWTToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000),
    };

    res.status(statusCode).cookie(tokenName, token, options).json({
        success: true,
        message,
        user: user.getUser(),
    });
};

export default sendToken;
