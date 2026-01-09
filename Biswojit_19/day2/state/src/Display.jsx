import React, { useContext } from "react";
import NameContext from "./NameContext";

function Display() {
  const name = useContext(NameContext);
  return <h2>Name: {name}</h2>;
}

export default Display;
