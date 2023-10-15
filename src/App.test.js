import { render } from "@testing-library/react";
import App from "./App";

describe("tic-tac-toe game being rendered", () => {
  test("renders the game", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("game").length).toBe(1);
  });

  test("renders the game info", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("game-info").length).toBe(1);
  });
  test("renders the game board ", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("game-board").length).toBe(1);
  });
});