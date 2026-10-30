import { useState } from 'react'
import Welcome from './components/Welcome'
import Child from './components/Child'
import ProductDetails from './components/Product-Details'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Menu from './components/Menu'
import Shop from './components/Shop'
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
        <Route path="/" element={<Greeting/>} >
          <Route path="child" element={<Child/>} />
          <Route path="welcome/:cname" element={<Welcome/>} />
        </Route>
        <Route path="/products" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
      </Routes>
    
    </>
  )
}

export default App
