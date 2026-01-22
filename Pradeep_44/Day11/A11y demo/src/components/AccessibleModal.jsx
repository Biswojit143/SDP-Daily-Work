import { useState, useRef, useEffect } from "react";

function AccessibleModal() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (open) {
      closeBtnRef.current.focus();
    }
  }, [open]);

  return (
    <section>
      <h2>Accessible Modal</h2>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            background: "#000000aa",
            position: "fixed",
            inset: 0
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              margin: "100px auto",
              width: "300px"
            }}
          >
            <h3 id="modal-title">Modal Title</h3>
            <p>This modal is accessible.</p>

            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AccessibleModal;
