import React,{useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {CardActionArea} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { additem } from '../../slices/itemSlice';
import { addtocart } from '../../slices/cartSlice';
import { filterfromstate } from '../../slices/filterbycategorySlice';
import FilterByCat from '../../thunks/filterByCat';
import SortByPrice from '../../thunks/sortByPrice';
import {Select,MenuItem} from '@mui/material';

const Product = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {data}=useSelector((state)=>state.getitems);
    console.log("SortedData",data);
    const filtereditemforproduct=useSelector((state)=>state.filterbycategory.data);
    console.log("filteredItems",filtereditemforproduct);
    useEffect(()=>{
      dispatch(SortByPrice());
    },[dispatch]);
    const gotocart=()=>{
        navigate('/productdetail');
    }
  return (
    <div style={{padding:50}}>
    <Select
    value="Sort By"
    label="Sort By"
  >
    <MenuItem value="Ascending" onClick={()=>dispatch(SortByPrice('asc',''))}>Ascending</MenuItem>
    <MenuItem value="Descending" onClick={()=>dispatch(SortByPrice('desc',''))}>Descending</MenuItem>
    <MenuItem value="Default" onClick={()=>dispatch(SortByPrice('products',''))}>Default</MenuItem>
  </Select>
    <Grid container spacing={2}>
    {data.map((item,index)=>{
        return(
            <Grid item xs={12} sm={4} md={3}>
            <CardActionArea onClick={()=>{dispatch(FilterByCat(item.category));console.log("CardClicked")}}>
        <Card key={index} sx={{  }} >
      <CardMedia
        sx={{ height: 450 }}
        image={item.thumbnail}
        title={item.title}
        onClick={()=>{gotocart();
        dispatch(additem(item));console.log("itemforfilter",item.category);
        dispatch(filterfromstate(item.category));}}
      />
      <CardContent>
        <Typography variant='h6' color="text.secondary" key={index}>
         Price: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
        <Button size="small" onClick={()=>{console.log("addtocart",item);dispatch(addtocart(item))}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </CardActionArea>
    </Grid>
    )
})}
</Grid>
    </div>
  )
}

export default Product