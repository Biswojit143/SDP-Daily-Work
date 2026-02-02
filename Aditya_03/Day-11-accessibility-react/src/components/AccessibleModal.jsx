import { useEffect, useRef } from "react";

const AccessibleModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusable = modalRef.current.querySelectorAll("button");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white p-6 rounded w-80 space-y-4"
      >
        <h2
          id="modal-title"
          className="text-lg font-semibold"
        >
          Accessible Modal
        </h2>

        <p className="text-sm text-gray-600">
          Focus is trapped inside this modal.
          Press ESC to close.
        </p>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">
            Action
          </button>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibleModal;