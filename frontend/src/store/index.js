import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import stableAPI from "./api";
import uiSlice from "./slice";

const store = configureStore({
  reducer: {
    [stableAPI.reducerPath]: stableAPI.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stableAPI.middleware),
});

export { store };
export const newAction = uiSlice.actions;
export const { useIdentityUserQuery } = stableAPI;

// export * from "./actions";
