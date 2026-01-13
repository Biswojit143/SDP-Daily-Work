import ReactQueryUsers from "./ReactQueryUsers";
import SwrUsers from "./SwrUsers";

function App() {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <h2>React Query</h2>
        <ReactQueryUsers />
      </div>

      <div>
        <h2>SWR</h2>
        <SwrUsers />
      </div>
    </div>
  );
}

export default App;
