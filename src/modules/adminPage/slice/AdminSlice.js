import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/LoadingStatuses";
import { GetPhotoAdminUrl } from "../../../api/api";

const initialState = {
    lodaingStates: {
        statusLoadingPhoto: LOADING_STATUS.idle
    },
    listPhotos: null,
    selectedTab: null
}

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getAdminPhotosQuery.pending, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.loading;
        })
        .addCase(getAdminPhotosQuery.rejected, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.error;
        })
        .addCase(getAdminPhotosQuery.fulfilled, (state, action) => {
            state.lodaingStates.statusLoadingPhoto = LOADING_STATUS.success;

            state.listPhotos = action.payload;
        })
    }
})

export const getAdminPhotosQuery = createAsyncThunk('adminSlice/getAdminPhotos', async(value, thunkAPI) => {
    const result = await fetch(GetPhotoAdminUrl(value.tab, value.count, value.offset)).then(res => res.json());
    return result;
})

export const GetAdminListPhotos = (state) => state.admin.listPhotos;

export const {
    setSelectedTab
} = adminSlice.actions;

export default adminSlice.reducer;