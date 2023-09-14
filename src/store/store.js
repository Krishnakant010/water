import { configureStore } from "@reduxjs/toolkit";
import SaverReducer from "../features/saver/saverSlice";
export const store = configureStore({
  reducer: SaverReducer,
});
