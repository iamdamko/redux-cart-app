import { createSlice } from "@reduxjs/toolkit";

const layoutSLice = createSlice({
  name: "ui",
  initialState: {
    isShown: false,
  },
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const layoutActions = layoutSLice.actions;

export default layoutSLice;
