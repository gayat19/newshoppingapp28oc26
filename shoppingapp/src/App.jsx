import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)
  
  let message = "Welcome to my app!"

  return (
    <>
      <Greeting/>
      <hr/>
      <Greeting/>
    </>
  )
}

export default App
