import { useState } from 'react'
import ProductDetails from './components/Product-Details'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Menu from './components/Menu'
import Products from './components/Products'
import { Route, Routes } from 'react-router'
import Greeting from './components/Greeting'
import Cart from './components/Cart'


function App() {
  const [count, setCount] = useState(0)
  
  let message = "Welcome to my app!"

  return (
    <>
      <Menu/>
      <hr/>
      <Routes>
        <Route path="/" element={<Greeting/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
      </Routes>
    
    </>
  )
}

export default App
