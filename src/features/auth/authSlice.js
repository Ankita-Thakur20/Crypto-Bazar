import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

let userExist = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
    name:'auth',
    initialState : {
        user : userExist || null,
        isLoading:false,
        isError:false,
        isSuccess : false,
        messsage:"",
    },
    reducers:{},
    extraReducers : builder =>{
        builder
      .addCase(registerUser.pending ,(state,action)=>{
                 state.isLoading = true
                 state.isSuccess = false
                 state.isError = false
             })
             .addCase(registerUser.fulfilled ,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = true
                 state.isError = false
                 state.user = action.payload
             })
             .addCase(registerUser.rejected ,(state,action)=>{
                 state.isLoading = false
                 state.isSuccess = false
                 state.isError = true
                 state.messsage = action.payload
             })
             .addCase(loginUser.pending ,(state,action)=>{
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(loginUser.fulfilled ,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected ,(state,action)=>{
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.messsage = action.payload
            })
            .addCase(logoutUser.fulfilled ,(state,action)=>{
                state.isError = false
                state.messsage = ""
                state.user=null;
            })
    }
})

export default authSlice.reducer;


//Auth Reg
export const registerUser = createAsyncThunk('Auth/reg',async(formData,thunkAPI)=>{
    try {
    return await authService.register(formData)
    } catch (error) {
        const messsage = error.response.data.messsage;
        return thunkAPI.rejectWithValue(messsage)
    }
    })

    //Auth login
    export const loginUser = createAsyncThunk('Auth/login',async(formData,thunkAPI)=>{
    try {
    return await authService.login(formData)
    } catch (error) {
        const messsage = error.response.data.messsage;
        return thunkAPI.rejectWithValue(messsage)
    }
    })

    //auth Logout
    export const logoutUser = createAsyncThunk('auth/logout',async()=>{
        localStorage.removeItem('user');
    })