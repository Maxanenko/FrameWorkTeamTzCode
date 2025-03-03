import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import {paintingsSlice} from "../src/components/app-layout/main/paintings-slice";
import {searchSlice} from "../src/components/app-layout/search/search-slice";
import {paginationSlice} from "../src/components/app-layout/pagination/pagination-slice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        paintings: paintingsSlice.reducer,
        search: searchSlice.reducer,
        pagination: paginationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
