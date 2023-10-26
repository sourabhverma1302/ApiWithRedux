import { createSlice } from "@reduxjs/toolkit";
import FilterByCat from "../thunks/filterByCat";


const filterbycategory=createSlice({
    name:'filterbycategory',
    initialState:{
        data:[],
        loading:false,
        error:null,
        category:''
    },
    reducers:{
        filterfromstate:(state,action)=>{
            state.category=action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(FilterByCat.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(FilterByCat.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=[];
            state.data=action.payload;
        });
        builder.addCase(FilterByCat.rejected,(state,action)=>{
            state.loading=false;
            state=action.error;
        })
    }
})

export const {filterfromstate} =filterbycategory.actions;
export default filterbycategory.reducer