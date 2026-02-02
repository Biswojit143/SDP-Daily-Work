import { useState } from "react";
import AccessibleForm from "./components/AccessibleForm";
import AccessibleDropdown from "./components/AccessibleDropdown";
import AccessibleModal from "./components/AccessibleModal";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 space-y-8 bg-gray-100">
      <h1 className="text-2xl font-bold">
        Accessibility in React (Day 11)
      </h1>

      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-lg font-semibold">
          Accessible Form
        </h2>

        <AccessibleForm />
        <AccessibleDropdown />
      </section>

      <section className="space-x-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Open Accessible Modal
        </button>

        <button
          disabled
          aria-disabled="true"
          className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
        >
          Loading...
        </button>
      </section>

      <AccessibleModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default App;