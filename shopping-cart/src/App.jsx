import { useState } from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css'


function App() {
  return (
    <>
    <h1>Shopping Cart</h1>
    <ProductList />
    <Cart />
    
    </>
  )
}

export default App
