

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
  return (
    <>
      <h1 id="greet">{message}</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Age: {customer.age}</p>
    </>
  )
}

export default Greeting