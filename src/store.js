import { configureStore } from "@reduxjs/toolkit";
import itemsliceReducer from './slices/itemSlice';
import cartsliceReducer from './slices/cartSlice';
import filterReducer from './slices/filterbycategorySlice';
import getItems from "./slices/getItems";
const store=configureStore({
    reducer:{
    itemslice:itemsliceReducer,
    cartslice:cartsliceReducer,
    filterbycategory:filterReducer,
    getitems:getItems
    }
});

export default store;