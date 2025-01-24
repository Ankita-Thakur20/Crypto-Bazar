import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
    name : 'coins',
    initialState:{
        user : null,
        coins : [],
        trendingCoins : [],
        coin :{},
        isLoading:false,
        isError:false,
        isSuccess : false,
        messsage:"",
        theme:true

    }, 
    reducers :{
        Changetheme : (state,action)=>{
            return{
                  ...state,
                  theme : state.theme ? false : true
            }
        }
    },
    extraReducers : builder =>{
        builder
        .addCase(getTrendingCoins.pending ,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(getTrendingCoins.fulfilled ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.trendingCoins = action.payload
        })
        .addCase(getTrendingCoins.rejected ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.messsage = action.payload
        })
        .addCase(searchCoins.pending ,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(searchCoins.fulfilled ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.coins = action.payload
        })
        .addCase(searchCoins.rejected ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.messsage = action.payload
        })
       
        .addCase(getCoin.pending ,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(getCoin.fulfilled ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.coin = action.payload
        })
        .addCase(getCoin.rejected ,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.messsage = action.payload
        })
    }
})

export const {Changetheme} = coinSlice.actions 
export default coinSlice.reducer;

//trendingCoins
 export const getTrendingCoins = createAsyncThunk('fetch/trending',async(_,thunkAPI)=>{
    try {
        return await coinService.fetchTrendingCoins();
    } catch (error) {
       console.log(error) 
    }
})

//search coins in search bar
export const searchCoins = createAsyncThunk('Search/Coins',async(query, thunkAPI)=>{
    try {
        return await coinService.fetchSearchCoin(query);
    } catch (error) {
       console.log(error) 
    }
})



 //fetch single coin detail
 export const getCoin = createAsyncThunk('fetch/Coin',async(id, thunkAPI)=>{
    try {
        return await coinService.fetchCoin(id);
    } catch (error) {
       console.log(error) 
    }
})