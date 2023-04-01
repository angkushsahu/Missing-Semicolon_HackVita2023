import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8080/api";
const apiQueries = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({}),
    tagTypes: ["User", "Product"],
});

export default apiQueries;
