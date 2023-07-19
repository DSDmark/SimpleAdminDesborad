import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.VITE_BASE_API_URL

const apiSlicer = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['userInfo', 'productDetails', 'login', 'signup'],
  endpoints: builder => ({
    getUserInfo: builder.query({
      query: (username: string) => `${username}`,
    }),
  }),
})

export default apiSlicer
export const { useGetUserInfoQuery } = apiSlicer
