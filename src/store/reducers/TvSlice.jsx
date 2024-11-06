import { createSlice } from "@reduxjs/toolkit";

export const TvSlice = createSlice({
  name: "tv",
  initialState: {
    info: null,
  },
  reducers: {
    loadTv: (state, action) => {
      state.info = action.payload;
    },
    removeTv: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadTv, removeTv } = TvSlice.actions;

export default TvSlice.reducer;
