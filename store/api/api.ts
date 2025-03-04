import { createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Author, Painting, Location } from './apiTypes';

type AxiosBaseQueryArgs = {
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
};

const axiosBaseQuery =
    ({ baseUrl = '' } = { baseUrl: '' }) =>
        async ({ url, method = 'GET', data, params }: AxiosBaseQueryArgs) => {
            try {
                const result = await axios({
                    url: baseUrl + url,
                    method,
                    data,
                    params
                });

                // Возвращаем полный ответ, включая статус и заголовки
                return {
                    data: result.data,
                    meta: {
                        response: result as AxiosResponse, // Полный ответ сервера
                        totalCount: Number(result.headers['x-total-count']) || 0
                    }
                };

            } catch (error) {
                const axiosError = error as AxiosError;
                return {
                    error: {
                        status: axiosError.response?.status,
                        data: axiosError.response?.data || axiosError.message,
                    },
                };
            }
        };

export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://test-front.framework.team' }),
    endpoints: (builder) => ({
        getPaintings: builder.query<{
            paintings: Array<Painting>;
            totalCount: number
        }, {
            page: number;
            limit: number;
            search: string
        }>({
            query: ({ page = 1, limit = 6, search = '' }) => ({
                url: '/paintings',
                params: {
                    _page: page,
                    _limit: limit,
                    q: search
                },
            }),
            transformResponse: (response: Array<Painting>, meta) => ({
                paintings: response,
                totalCount: meta?.totalCount || 0
            })
        }),
        getLocationById: builder.query<Location, number>({
            query: (id) => ({
                url: `/locations/${id}`,
            }),
        }),
        getAuthorById: builder.query<Author, number>({
            query: (id) => ({
                url: `/authors/${id}`,
            }),
        }),
        getImage: builder.query<string, string>({
            query: (imagePath) => ({
                url: `${imagePath}`,
            }),
            transformResponse: (_, meta, arg) => {
                if (!meta?.response || meta.response.status !== 200) {
                    return 'https://astrotowing.ca/wp-content/uploads/2020/08/Horizontal-Placeholder-Image-13947_1080x675.jpg';
                }
                return `https://test-front.framework.team${arg}`
            },
        }),
    }),
});

export const {
    useGetPaintingsQuery,
    useGetAuthorByIdQuery,
    useGetLocationByIdQuery,
    useGetImageQuery,
} = api;
