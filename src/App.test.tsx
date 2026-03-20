import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders the demo Vite text", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it('should increment count by 1 on click of count button', async () => {
    render(<App />);
    const user = userEvent.setup();

    //verify that initial count is 0
    const buttonWithText = screen.getByRole('count-button');
    expect(buttonWithText.textContent).toBe('count is 0');

    // Click the button
    await user.click(buttonWithText);

    // Assert that the count text is updated to 1
    expect(buttonWithText.textContent).toBe('count is 2');

  });
});