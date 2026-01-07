import React, { useContext } from 'react'
import { nameContext,themeContext } from './App';
function Child1() {
    let value = useContext(nameContext);
    let theme = useContext(themeContext);
  return (
    <div>Child1
        <br />
        vaule from context is : {value}
        <br />
        theme from context is : {theme}
    </div>
    
  )
}

export default Child1