import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/home" element={<Home />} />

      {/* /about route */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;