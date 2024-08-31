import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/LoadingStatuses";
import { GetPhotoAdminUrl } from "../../../api/api";

const initialState = {
    lodaingStates: {
        statusLoadingPhoto: LOADING_STATUS.idle
    },
    listPhotos: null
}

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getAdminPhotos.pending, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.loading;
        })
        .addCase(getAdminPhotos.rejected, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.error;
        })
        .addCase(getAdminPhotos.fulfilled, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.success;

            state.listPhotos = action.payload;
        })
    }
})

export const getAdminPhotos = createAsyncThunk('adminSlice/getAdminPhotos', async(value, thunkAPI) => {
    const result = await fetch(GetPhotoAdminUrl(value.tab, value.count, value.offset)).then(res => res.json());
    return result;
})

export const {

} = adminSlice.actions;

export default adminSlice.reducer;