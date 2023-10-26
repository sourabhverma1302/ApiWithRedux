import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {Card,CardMedia,CardContent,Typography,CardActions,Grid} from '@mui/material';
import { removefromcart } from '../../slices/cartSlice';
const Cart = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cartitems=useSelector((state)=>state.cartslice);
  return (
    <>
    <Grid container spacing={2}>
    {cartitems.map((item,index)=>{
      return(
        <Grid item xs={12} sm={4} md={3}>
<Card sx={{height:500,width:500,margin:'auto'}}>
<CardMedia
sx={{ height: 300 }}
image={item.thumbnail}
title={item.title}
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
  {item.description}
</Typography>
</CardContent>
<CardActions>
<Button size="small" onClick={()=>navigate('/')}>Back</Button>
<Button size="small" onClick={()=>dispatch(removefromcart(item))}>Remove</Button>
</CardActions>
</Card>
</Grid>
)
})}
</Grid>
    <Button onClick={()=>navigate('/')}>Back</Button>
    </>
  )
}

export default Cart