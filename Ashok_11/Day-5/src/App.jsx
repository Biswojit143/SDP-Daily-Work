import { usePreference } from "./context/PreferenceContext";
import Login from "./components/Login";
import Header from "./components/Header";
import Settings from "./components/Settings";
import Content from "./components/Content";

const App = () => {
  const { user } = usePreference();

  if (!user) return <Login />;

  return (
    <div className="min-h-screen p-6 space-y-6">
      <Header />
      <Settings />
      <Content />
    </div>
  );
};

export default App;