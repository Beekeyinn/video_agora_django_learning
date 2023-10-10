import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCsrfToken } from "../../utils";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
    prepareHeaders: (headers, api) => {
      headers.append("X-CSRFToken", getCsrfToken());
    },
  }),
  tagTypes: ["identity"],
  endpoints: (builder) => ({
    identityUser: builder.query({
      query: () => "identity/",
      providesTags: ["identity"],
    }),
  }),
});

export default api;
