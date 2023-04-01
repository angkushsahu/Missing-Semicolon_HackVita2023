import { IUser } from "./types";

export interface Locals {
    user: IUser;
}

export as namespace Express;
export = Express;

declare namespace Express {
    export interface Response {
        typedLocals: Locals;
    }
}
