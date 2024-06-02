import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: false
}



export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const getUser = (state) => state.auth.user

export const {
    setUser
} = authSlice.actions;

export default authSlice.reducer