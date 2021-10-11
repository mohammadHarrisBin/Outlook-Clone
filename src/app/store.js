import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import circleClickedReducer from '../features/circleClickedSlice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        circleclicked: circleClickedReducer,
    }
});
