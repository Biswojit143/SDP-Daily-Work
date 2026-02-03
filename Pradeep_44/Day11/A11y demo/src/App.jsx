import AccessibleForm from "./components/AccessibleForm";
import AccessibleButton from "./components/AccessibleButton";
import AccessibleModal from "./components/AccessibleModal";

function App() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Accessibility in React (a11y)</h1>

      <AccessibleButton />
      <hr />

      <AccessibleForm />
      <hr />

      <AccessibleModal />
    </main>
  );
}

export default App;
