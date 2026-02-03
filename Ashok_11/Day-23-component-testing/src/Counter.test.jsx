import { render } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";

describe("Counter Snapshot", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});