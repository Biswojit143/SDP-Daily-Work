import { Dialog } from "@headlessui/react";
import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <Dialog.Title className="text-lg font-bold">
            Headless UI Modal
          </Dialog.Title>

          <p className="mt-2">This modal uses Headless UI + Tailwind.</p>

          <button
            className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
