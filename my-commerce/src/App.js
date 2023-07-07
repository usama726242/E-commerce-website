import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header'
import CartList from './Components/CartList'
import ProductList from './Components/ProductList'
import { Routes, Route} from "react-router-dom";

import {useState} from 'react'

function App() {

const [product, setProduct] = useState([])
const [cart, setCart] = useState([])
const [searchedText, setsearchedText] = useState("")

const [filteredProducts, setfilteredProducts] = useState([])


useEffect(()=>{
  console.log('filtered products', filteredProducts)
},[filteredProducts])

const addToCart=(data)=>{
setCart([...cart,{...data, quantity:1}])
}


  return (
    <>
     
   <Header count={cart.length} />
   
    <Routes>
   
        <Route path="/cartlist" element={<CartList cartItem={cart} />}/>
          <Route path="/input" element={<ProductList settingProduct={setProduct} searchedTerm={searchedText} setsearchedText={setsearchedText} productsList={product} cart={addToCart}/>
} />

      
        
      </Routes>

    
    </>
  );
}

export default App;
