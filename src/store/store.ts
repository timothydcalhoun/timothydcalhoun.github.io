import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./themeSlice.ts";

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']