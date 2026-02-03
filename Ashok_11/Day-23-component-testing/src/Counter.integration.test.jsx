import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";

describe("Counter Integration", () => {
  it("increments count on button click", () => {
    render(<Counter />);

    const countText = screen.getByTestId("count");
    const incrementBtn = screen.getByText("Increment");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(countText.textContent).toBe("Count: 2");
  });

  it("resets count", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByTestId("count").textContent).toBe("Count: 0");
  });
});