import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    title: "Test Title",
  },
  reducers: {},
});

export default uiSlice;