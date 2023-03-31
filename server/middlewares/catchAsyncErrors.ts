import { Request, Response, NextFunction } from "express";

function catchAsyncErrors(theFunction: Function) {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
}

export default catchAsyncErrors;
