
import userAuth$ from '../ObservablesFiles/UserAuthBehaviourSubject'
import { Outlet, useNavigate } from 'react-router'
import count$ from '../ObservablesFiles/BehaviourSubjectExample'

import { useEffect, useState } from 'react'
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

  let [customer, setCustomer] = useState(userAuth$.getValue())
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

  useEffect(() => {
    
    const userAuthSubscription = userAuth$.subscribe({
      next(user) {
        setCustomer(user);
        console.log('User authenticated:', user?.name);
      }
    });
    return () => {
     
      userAuthSubscription.unsubscribe();
    };
  }, []);
  const handleGoToLogin = () => {
    navigate('/login')
  }
  const handleLogout = () => {
    userAuth$.next(undefined);
  }
  return (
    <>
      {
        customer?.name? <h1 id="greet">Welcome {customer.name}
        <button className="btn btn-success" onClick={handleLogout}>Logout</button>  
          </h1>
        :
        <h1 id="greet">
          <button className="btn btn-success" onClick={handleGoToLogin}>Login</button>
        </h1>
      }
      
      {/* <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Age: {customer.age}</p> */}
      <button onClick={handleNavigate}>Go to Child</button>
      <button onClick={handleNavigate1}>Go to Child</button>
      <Outlet/>
    </>
  )
}

export default Greeting