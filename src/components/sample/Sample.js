import React,{useEffect} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FilterByCat from '../../thunks/filterByCat';
const Sample = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>
        {
        dispatch(FilterByCat());
        console.log("data",res.data)
        }
        )
    },[dispatch]);
  return (
    <div></div>
  )
}

export default Sample