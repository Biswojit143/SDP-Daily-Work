import { lazy, Suspense, useState } from "react";

const Heavy = lazy(() => import("./pages/Heavy"));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div style={{ paddingTop: 40, textAlign: "center" }}>
      <h2>Performance Monitoring Demo</h2>

      <button onClick={() => setShowHeavy(true)}>
        Load Heavy Component
      </button>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        {showHeavy && <Heavy />}
      </Suspense>
    </div>
  );
}

export default App;