import apiQueries from "./api.query";
import { ILogin, IRequest, IResetPassword, IUserSignup, IUser, IStorageSignup, ITransportSignup } from "../../types";

export const authApi = apiQueries.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IRequest & { user: IUser }, ILogin>({
            query: (body: ILogin) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),
        forgotPassword: builder.mutation<IRequest, { email: string }>({
            query: (body: { email: string }) => {
                return {
                    url: "/auth/forgot-password",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
        }),
        resetPassword: builder.mutation<IRequest, IResetPassword>({
            query: (body: IResetPassword) => {
                return {
                    url: `/auth/reset-password/${body.resetId}`,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: { password: body.password },
                };
            },
        }),
        userSignup: builder.mutation<IRequest & { user: IUser }, IUserSignup>({
            query: (body: IUserSignup) => {
                return {
                    url: "/auth/signup/user",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),
        storageSignup: builder.mutation<IRequest & { user: IUser }, IStorageSignup>({
            query: (body: IStorageSignup) => {
                return {
                    url: "/auth/signup/storage",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),
        transportSignup: builder.mutation<IRequest & { user: IUser }, ITransportSignup>({
            query: (body: ITransportSignup) => {
                return {
                    url: "/auth/signup/transport",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useLoginMutation,
    useUserSignupMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useStorageSignupMutation,
    useTransportSignupMutation,
} = authApi;
