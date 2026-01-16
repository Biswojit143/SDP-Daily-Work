import useAuth from "./hooks/useAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const { user } = useAuth();
  return user ? <Home /> : <Login />;
};

export default App;
