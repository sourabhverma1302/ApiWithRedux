import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FilterByCat=createAsyncThunk("filterproducts/get",async(category)=>{
    console.log("Hi Thunk Here");
    const thunkdata=await axios.get(`https://dummyjson.com/products/category/${category}`);
    return thunkdata.data.products;
})

export default FilterByCat;