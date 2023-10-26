import React from 'react'
import { Grid,Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FilterItems = () => {
    const filtereditems=useSelector((state)=>state.filterbycategory.data);
    console.log("FilteredItem",filtereditems);
    const navigate=useNavigate();
  return (
    <>
    <Grid container spacing={2}>
    {filtereditems.map((item,index)=>{
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

export default FilterItems