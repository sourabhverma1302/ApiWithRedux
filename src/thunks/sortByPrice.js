import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var newdata=[];


const SortByPrice=createAsyncThunk("sortbyprice/get",async(mybrand)=>{
    // console.log("Order",sortOrder);
    console.log("SortByPriceThunk Called");
    console.log("Brand",mybrand.first,mybrand.second);
    const thunkdata=await axios.get(`https://dummyjson.com/products`)
    console.log("thunkdatafiltered",thunkdata.data.products);
        if(mybrand.first === "asc"){
            thunkdata.data.products.sort((a,b)=>a.price-b.price);
        }
        else if(mybrand.first === "desc"){
            thunkdata.data.products.sort((a,b)=>b.price-a.price);
        }
        if(mybrand.second !== ""){
            newdata=thunkdata.data.products.filter((item)=>item.brand.toLowerCase().includes(mybrand.second.toLowerCase()));
            return newdata;
        }
        console.log("SortedOrderForCheck",thunkdata.data.products);
        return thunkdata.data.products;
    })

export default SortByPrice;