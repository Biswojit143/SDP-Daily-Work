import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
