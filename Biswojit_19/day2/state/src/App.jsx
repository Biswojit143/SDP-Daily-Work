import React from "react";
import NameContext from "./NameContext";
import Display from "./Display";

function App() {
  return (
    <NameContext.Provider value="Biswojit Sahoo">
      <Display />
    </NameContext.Provider>
  );
}

export default App;
