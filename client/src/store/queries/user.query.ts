import apiQueries from "./api.query";
import { IRequest, IUpdateAccount, IUser } from "../../types";

export const userApi = apiQueries.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<IRequest & { user: IUser }, void>({
            query: () => {
                return {
                    url: "/user",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
        }),
        changePassword: builder.mutation<IRequest, { password: string }>({
            query: (body: { password: string }) => {
                return {
                    url: "/user/change-password",
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
        }),
        logout: builder.mutation<IRequest, void>({
            query: () => {
                return {
                    url: "/user/logout",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
        }),
        updateAccount: builder.mutation<IRequest & { user: IUser }, IUpdateAccount>({
            query: (body: IUpdateAccount) => {
                return {
                    url: "/user",
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
        }),
        deleteAccount: builder.mutation<IRequest, void>({
            query: () => {
                return {
                    url: "/user",
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
        }),
    }),
    overrideExisting: false,
});

export const { useChangePasswordMutation, useDeleteAccountMutation, useGetUserQuery, useLogoutMutation, useUpdateAccountMutation } = userApi;
