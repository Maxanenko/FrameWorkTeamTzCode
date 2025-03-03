import { createSlice } from '@reduxjs/toolkit';

type PaginationState = {
  page: number;
  limit: number;
  totalPages: number;
};

const initialState: PaginationState = {
  page: 1,
  limit: 6,
  totalPages: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setPage, setLimit, setTotalPages } = paginationSlice.actions;
