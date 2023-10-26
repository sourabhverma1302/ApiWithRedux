import { createSlice } from "@reduxjs/toolkit";
import SortByPrice from "../thunks/sortByPrice";

const getItems=createSlice({
    name:'getitems',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{
        getitemss:(state,action)=>{
            state.data=action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(SortByPrice.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(SortByPrice.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=[];
            state.data=action.payload
        });
        builder.addCase(SortByPrice.rejected,(state,action)=>{
            state.loading=true;
            state.error=action.error;
        })
    }
});

export const {getitemss}=getItems.actions;
export default getItems.reducer;