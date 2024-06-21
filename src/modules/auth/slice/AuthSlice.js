import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RegistrationURL } from "../api/authApi";
import { hashSync } from "bcryptjs";


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

export const RegistrationQuery = createAsyncThunk("RegistrationQuery/authSlice", async(value, thunkAPI) => {


    let status = null;
    const result = await fetch(RegistrationURL(), {
        method: "POST", 
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            email: value.email,
            password: value.password.length > 4 ? hashSync(value.password, 7) : '',
            birthday: value.birthday
        })
    }).then(resp => {
        status = resp.status;
        if(!resp.ok){
            //return rejectWithValue(resp.status)
            //console.log(resp.json());
            return resp.json();
        }


        return resp.json();
    })
    .catch(err => {
        return err
        //return rejectWithValue(524)
        //console.log(err);
    });
    //return result;
    return {
        result: result,
        status: status
    };
})

export const getUser = (state) => state.auth.user

export const {
    setUser
} = authSlice.actions;

export default authSlice.reducer