import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

describe("Register Page", () => {

  test("registers user and saves data", async () => {
    render(<Register />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passInput = screen.getByPlaceholderText("Password");
    const button = screen.getByRole("button", { name: /register/i });

    await userEvent.type(emailInput, "test@gmail.com");
    await userEvent.type(passInput, "123456");
    await userEvent.click(button);

    expect(
      screen.getByText("Registration successful")
    ).toBeInTheDocument();
  });

});
