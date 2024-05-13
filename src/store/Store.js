import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../modules/photosPage/slice/PhotoSlice';


export default configureStore({
    reducer: {
        photo: photoReducer
    }
})