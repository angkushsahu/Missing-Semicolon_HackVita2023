export interface IUser {
    name: string;
    email: string;
    _id: string;
    phone: string;
    type: string;
    zone: string;
    state: string;
    locality: string;
}

export interface IRequest {
    success: boolean;
    message: string;
}

export interface ILogin {
    password: string;
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

export interface IProduct {
    name: string;
    type: string;
    unit: string;
    cost: number;
    weight: number;
    location: string;
    description: string;
    image: string;
}

export interface IUpdateProduct extends Omit<IProduct, "image"> {}

export interface IProductResponse extends Omit<IProduct, "image"> {
    image: { picture: string; publicUrl: string };
}
