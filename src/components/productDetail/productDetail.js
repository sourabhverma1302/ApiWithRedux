import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import FilterItems from '../filtereditems/FilterItems';
const ProductDetail = () => {
    const navigate=useNavigate();
    const data=useSelector((state)=>state.itemslice);
  return (
    <div style={{margin:'auto',padding:'150px'}}>
    {data.map((item,index)=>{
        return(
<Card sx={{height:500,width:500,margin:'auto'}} key={index}>
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
  <Button size="small">Learn More</Button>
</CardActions>
</Card>
        )
    })}
    <FilterItems/>
    </div>
  )
}

export default ProductDetail