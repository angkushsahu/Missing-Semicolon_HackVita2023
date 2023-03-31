import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils";

function invalidUrl(req: Request, res: Response) {
    res.status(404).json({ success: false, message: "Please enter a valid api url" });
}

function errors(err: any, req: Request, res: Response, next: NextFunction) {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.code === 413) {
        const message = `Data size too large to be accepted`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong MongoDb ID error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const message = "JSON web token is invalid, try again";
        err = new ErrorHandler(message, 400);
    }

    // JWT expire error
    if (err.name === "TokenExpiredError") {
        const message = "JSON web token is expired";
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({ success: false, message: err.message });
}

export default { errors, invalidUrl };
