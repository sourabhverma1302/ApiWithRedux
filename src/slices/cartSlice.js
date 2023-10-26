import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartslice',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload);
            console.log("action",action.payload);
            console.log("state",state);
        },
        removefromcart:(state,action)=>{
            const productid=action.payload.id;
            console.log("productid",state.id);
            return state.filter(item=>item.id !== productid)
        }
    }
})
export const {addtocart,removefromcart} =cartSlice.actions;
export default cartSlice.reducer;