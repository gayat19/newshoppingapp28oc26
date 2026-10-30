

import { Outlet, useNavigate } from 'react-router'
import './Greeting.css'

// export default function Greeting() {    
//   let message = "Welcome to my app!"
  
//   let customer = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     age: 30
//   }
//   return (
//     <>
//       <h1 id="greet">{message}</h1>
//       <p>Name: {customer.name}</p>
//       <p>Email: {customer.email}</p>
//       <p>Age: {customer.age}</p>
//     </>
//   )
// }

const Greeting = () => {
  let message = "Welcome to my app!"

  let customer = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
  }
  const navigate = useNavigate()
  const handleNavigate = () => {
    //get a random number to toggle the navigation based on even or odd
    const randomNumber = Math.floor(Math.random() * 100)
    if(randomNumber % 2 === 0) {
      navigate('/welcome/Larry')
    }
    else {
      navigate('/welcome/James')
    }
    // navigate('/welcome/Larry')
    
  }
  const handleNavigate1 = () => {
    
      navigate('/welcome/James')
    
  }
  return (
    <>
      <h1 id="greet">{message}</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Age: {customer.age}</p>
      <button onClick={handleNavigate}>Go to Child</button>
      <button onClick={handleNavigate1}>Go to Child</button>
      <Outlet/>
    </>
  )
}

export default Greeting