import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#ffffff" : "#111111",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "40px"
      }}
    >
      <h1>Theme: {theme}</h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
