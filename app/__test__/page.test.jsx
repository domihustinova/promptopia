import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("HomePage", () => {
  it("displays the main heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "Discover & Share AI-Powered Prompts",
      })
    ).toBeVisible();
  });
});
