import { test, expect } from "@playwright/test";

test("user can login successfully", async ({ page }) => {
  // 1. Open app
  await page.goto("/");

  // 2. Fill inputs
  await page.getByPlaceholder("Email").fill("test@example.com");
  await page.getByPlaceholder("Password").fill("123456");

  // 3. Click login
  await page.getByRole("button", { name: "Login" }).click();

  // 4. Assert success heading appears
  await expect(
    page.getByRole("heading", {
      name: /welcome, you are logged in/i,
    })
  ).toBeVisible();
});