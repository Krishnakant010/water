import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "",
};

export const saverSlice = createSlice({
  name: "saver",
  initialState,
  reducers: {
    saveLat: (state, action) => {
      lati: action.payload.lat;

      state = lati;
    },
    // saveLong: (state, action) => {
    //   longitude = action.payload.lati;
    //   state.longi = longitude;
    // },
  },
});

export const { saveLat } = saverSlice.actions;
export default saverSlice.reducer;
