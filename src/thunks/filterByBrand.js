import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FilterByBrand=createAsyncThunk("filterbybrand/get",async(brand)=>{
    const thunkdata=await axios.get('https://dummyjson.com/products')
    return thunkdata.data.products.filter(product=>product.brand === brand);
})

export default FilterByBrand;