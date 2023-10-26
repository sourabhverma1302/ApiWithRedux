import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:'itemslice',
    initialState:[],
    reducers:{
        additem:(state,action)=>{
            state.pop();
            state.push(action.payload);
            console.log("action",action.payload);
            console.log("state",state);
        }
    }
})

export const {additem} =itemSlice.actions;
export default itemSlice.reducer