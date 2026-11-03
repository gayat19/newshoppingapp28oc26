import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Child from './components/Child'
import ProductDetails from './components/Product-Details'
import './App.css'
import Menu from './components/Menu'
import Shop from './components/Shop'
import { Route, Routes } from 'react-router'
import Greeting from './components/Greeting'
import Cart from './components/Cart'
import SwitchMapDemo from './components/RxjsDemos/SwitchMapDemo'
import MergeMapDemo from './components/RxjsDemos/MergeMapDemo'
import ConcatMapDemo from './components/RxjsDemos/ConcatMapDemo'
import ExhaustMapDemo from './components/RxjsDemos/ExhaustMapDemo'


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
        <Route  element={<ProtectedRoute/>} >
             <Route path="/products" element={<Shop/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
       
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        {/* <Route path="/rxjs/switchmap" element={<SwitchMapDemo/>} />
        <Route path="/rxjs/mergemap" element={<MergeMapDemo/>} />
        <Route path="/rxjs/concatmap" element={<ConcatMapDemo/>} />
        <Route path="/rxjs/exhaustmap" element={<ExhaustMapDemo/>} />*/}
      </Routes> 
    
    </>
  )
}

export default App
