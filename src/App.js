import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product,Cart } from './components/Main';
import {ProductDetail} from './components/Main'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import FilterItems from './components/filtereditems/FilterItems';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/productdetail' element={<ProductDetail/>}/>
  <Route path='/filter' element={<FilterItems/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App