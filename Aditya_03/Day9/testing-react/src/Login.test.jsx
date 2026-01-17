import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {

  beforeEach(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "test@gmail.com",
        password: "123456",
      })
    );
  });

  test("login success", async () => {
    render(<Login />);

    await userEvent.type(
      screen.getByPlaceholderText("Email"),
      "test@gmail.com"
    );

    await userEvent.type(
      screen.getByPlaceholderText("Password"),
      "123456"
    );

    await userEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(
      screen.getByText("Login successful")
    ).toBeInTheDocument();
  });

});
