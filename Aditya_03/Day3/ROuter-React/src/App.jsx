import {Routes, Route } from 'react-router'  
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'

function App() {

  return (
    <>
    Welcome to my website....
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
