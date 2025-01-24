import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './coinSlice';
import authReducer from './auth/authSlice';
import cartReducer from './Cart/cartSlice'

const store = configureStore({
    reducer : {
       coins : coinReducer,
       auth : authReducer,
       cart : cartReducer
    }
})

export default store;