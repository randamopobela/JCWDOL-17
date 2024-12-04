import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.slice";

const reducer = combineReducers({
    counter: counterSlice,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
