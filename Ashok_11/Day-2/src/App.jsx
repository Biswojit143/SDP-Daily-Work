import { useState } from 'react';
import './App.css';
import Child1 from './Child1';

function App() {
  const [name, setName] = useState("Hello from state");
  const [theme, setTheme] = useState("dark");

  return (
    <>
      Today we are going to learn useState
      <br />
      <Child1 name={name} theme={theme} />
    </>
  );
}

export default App;