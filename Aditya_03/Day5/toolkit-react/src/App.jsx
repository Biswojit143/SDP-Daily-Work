// App.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Counterslice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </>
  );
}

export default App;
