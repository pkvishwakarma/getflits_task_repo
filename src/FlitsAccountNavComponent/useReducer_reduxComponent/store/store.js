import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userinfo/userinfoSlice';

export const store =configureStore({
    reducer:userReducer
});