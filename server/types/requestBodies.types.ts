export interface IUserSignup {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface ITransportSignup extends IUserSignup {
    zone: string;
    state: string;
}

export interface IStorageSignup extends IUserSignup {
    state: string;
    locality: string;
}

export interface IUpdateUser extends IUserSignup {}

export interface ILogin {
    email: string;
    password: string;
}
