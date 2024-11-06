import { createSlice } from "@reduxjs/toolkit";

export const PersonSlice = createSlice({
  name: "tv",
  initialState: {
    info: null,
  },
  reducers: {
    loadPerson: (state, action) => {
      state.info = action.payload;
    },
    removePerson: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadPerson, removePerson } = PersonSlice.actions;

export default PersonSlice.reducer;
