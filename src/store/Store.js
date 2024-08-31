import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../modules/photosPage/slice/PhotoSlice';
import adminReducer from '../modules/adminPage/slice/AdminSlice';


export default configureStore({
    reducer: {
        photo: photoReducer,
        admin: adminReducer
    }
})