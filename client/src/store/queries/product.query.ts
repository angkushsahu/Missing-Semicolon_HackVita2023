import apiQueries from "./api.query";
import { IProduct, IProductResponse, IRequest, IUpdateProduct } from "../../types";

export const productApi = apiQueries.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation<IRequest & { product: IProductResponse }, IProduct>({
            query: (body: IProduct) => {
                return {
                    url: "/product/create",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["Product"],
        }),
        allProducts: builder.query<IRequest & { products: IProductResponse[]; totalProducts: number; resultPerPage: number }, { query: string }>({
            query: ({ query }: { query: string }) => {
                return {
                    url: `/product/all${query}`,
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
            providesTags: ["Product"],
        }),
        allMyProducts: builder.query<IRequest & { products: IProductResponse[]; totalProducts: number; resultPerPage: number }, { query: string }>({
            query: ({ query }: { query: string }) => {
                return {
                    url: `/product/all/my-products${query}`,
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
            providesTags: ["Product"],
        }),
        deleteProduct: builder.mutation<IRequest, { id: string }>({
            query: ({ id }: { id: string }) => {
                return {
                    url: `/product/delete/${id}`,
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
            invalidatesTags: ["Product"],
        }),
        getProductById: builder.mutation<IRequest & { product: IProductResponse }, { id: string }>({
            query: ({ id }: { id: string }) => {
                return {
                    url: `/product/${id}`,
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                };
            },
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation<IRequest & { product: IProductResponse }, IUpdateProduct & { id: string }>({
            query: (body: IUpdateProduct & { id: string }) => {
                return {
                    url: `/product/${body.id}`,
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body,
                };
            },
            invalidatesTags: ["Product"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useAllMyProductsQuery,
    useAllProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetProductByIdMutation,
    useUpdateProductMutation,
} = productApi;
