import { createSlice } from '@reduxjs/toolkit';
import { Painting } from '../../../../store/api/apiTypes';

type PaintingsState = {
  paintings: Array<Painting>;
};

const initialState: PaintingsState = {
  paintings: [],
};

export const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setPaintings: (state, action) => {
      state.paintings = action.payload;
    },
  },
});

export const { setPaintings } = paintingsSlice.actions;
