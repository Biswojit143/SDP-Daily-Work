import { useState } from "react";
import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

/* PRIMARY BUTTON WITH INTERACTION */
export function Primary() {
  const [count, setCount] = useState(0);

  return (
    <Button
      label={`Primary Clicked: ${count}`}
      variant="primary"
      onClick={() => setCount(count + 1)}
    />
  );
}

/* SECONDARY BUTTON WITH INTERACTION */
export function Secondary() {
  const [active, setActive] = useState(false);

  return (
    <Button
      label={active ? "Active" : "Inactive"}
      variant="secondary"
      onClick={() => setActive(!active)}
    />
  );
}