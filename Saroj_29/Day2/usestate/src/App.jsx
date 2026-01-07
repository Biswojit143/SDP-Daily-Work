import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
function App() {
  const [count,setCount] = useState(0)
  const [name,setname] =useState("");
  const [obj,setobj] = useState(null);

  let handText=()=>{
    setname("Saroj");
  }

  return (
    <>
      <Home />
    </>
  )
}

export default App
