import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../modules/photosPage/slice/PhotoSlice';
import authReducer from '../modules/auth/slice/AuthSlice';


export default configureStore({
    reducer: {
        photo: photoReducer,
        auth: authReducer
    }
})