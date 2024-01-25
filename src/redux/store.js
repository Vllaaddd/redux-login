import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./slice";

export const store = configureStore({
    reducer: {
        authUser: AuthReducer,
    }
})