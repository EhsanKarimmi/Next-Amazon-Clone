import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        productReducer,
    },
});

export type RootState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
