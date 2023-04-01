export interface IUser {
    name: string;
    email: string;
    _id: string;
    phone: string;
    zone: string;
    state: string;
    locality: string;
}

export interface IRequest {
    success: boolean;
    message: string;
}

export interface ILogin {
    name: string;
    email: string;
}

export interface IResetPassword {
    password: string;
    resetId: string;
}

export type ZoneType = "" | "nation" | "state";

export interface IUserSignup {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface IStorageSignup extends IUserSignup {
    state: string;
    locality: string;
}

export interface ITransportSignup extends IUserSignup {
    zone: string;
    state: string;
}

export interface IUserUpdate extends Omit<IUserSignup, "password"> {}
export interface IStorageUpdate extends Omit<IStorageSignup, "password"> {}
export interface ITransportUpdate extends Omit<ITransportSignup, "password"> {}

export type IUpdateAccount = IUserUpdate | IStorageUpdate | ITransportUpdate;
