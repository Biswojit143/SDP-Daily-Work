import { useState } from "react";

function AccessibleForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Form submitted successfully");
  };

  return (
    <section>
      <h2>Accessible Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />

        <input
          id="email"
          type="email"
          required
          aria-required="true"
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p aria-live="polite">{message}</p>
    </section>
  );
}

export default AccessibleForm;
