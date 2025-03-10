import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  search: string;
};

const initialState: SearchState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
