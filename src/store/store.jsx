import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/reducers/MovieSlice";
import tvReducer from "./reducers/TvSlice";
import personReducer from "./reducers/PersonSlice";

export const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
    tvReducer: tvReducer,
    personReducer: personReducer,
  },
});
