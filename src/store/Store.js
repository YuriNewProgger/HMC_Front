import { configureStore } from "@reduxjs/toolkit";
import smartRenderControllerReducer from "./slice/smartRenderControllerSlice";


export default configureStore({
    reducer: {
        smartRenderController: smartRenderControllerReducer
    }
})