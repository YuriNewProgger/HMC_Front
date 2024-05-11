import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isSmartTv: null
}

export const smartRenderControllerSlice = createSlice({
    name: 'smartRenderControllerSlice',
    initialState,
    reducers:{
        setIsSmartTv: (state, action) => {
            state.isSmartTv = action.payload;
        }
        
    }
})

export const GetIsSmartTv = (state) => state.smartRenderController.isSmartTv;

export const {
    setIsSmartTv
} = smartRenderControllerSlice.actions;

export default smartRenderControllerSlice.reducer;