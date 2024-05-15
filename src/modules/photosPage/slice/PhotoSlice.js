import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOADING_STATUS } from "../../../constants/LoadingStatuses"
import { DateFormating } from "../../../utils/DateForming"


const initialState = {
    statusLoadingPhoto: 'idle',
    selectedPotos: null,
    //photos: [],
    dateStart: DateFormating(new Date(), 3),
    dateEnd: DateFormating(new Date(), -165)
}


export const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers:{
        setSelectedPhoto: (state, action) => {
            state.selectedPotos = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(GetPhotoQuery.pending, (state, action) => {
            state.statusLoadingPhoto = LOADING_STATUS.loading;
        })
        .addCase(GetPhotoQuery.rejected, (state, action) => {
            state.statusLoadingPhoto = LOADING_STATUS.error;
        })
        .addCase(GetPhotoQuery.fulfilled, (state, action) => {
            state.statusLoadingPhoto = LOADING_STATUS.success;
        })
    }
})

export const GetPhotoQuery = createAsyncThunk('photoSlice/GetPhotoQuery', async(value, thunkAPI) => {

})

export const GetSelectedPhoto = (state) => state.photo.selectedPotos;

export const {
    setSelectedPhoto
} = photoSlice.actions;

export default photoSlice.reducer;