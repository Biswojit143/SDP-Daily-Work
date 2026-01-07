import { createContext } from 'react'
import './App.css'
import Child1 from './Child1';

let nameContext = createContext();
let themeContext = createContext();

function App() {
 
  return (
    <>
      Today we are going  to learn then useContext
      {
      //   The steps to create the context object.

      // => Use the createContext method to create the context object.
      // => use the context provider in the Component
      // add the value
      // => export the context object.

      // How to acess the context object in the other component.

      // => use the useContext hook to access the context object to get the context data.
      }
      <nameContext.Provider value={"Hello from context"}>
        <themeContext.Provider value={"dark"}>
          <Child1 />
        </themeContext.Provider>
      </nameContext.Provider>
    </>
  )
}

export {nameContext, themeContext}
export default App
