import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React JSX Demo</h1>

      <Counter />

      <hr />

      <UserCard
        name="Pradeep Patra"
        age={23}
        isDeveloper={true}
      />

      <hr />

      <Todo />
    </div>
  );
}

export default App;
