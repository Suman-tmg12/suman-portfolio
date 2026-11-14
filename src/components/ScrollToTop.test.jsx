import { render, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import ScrollToTop from "./ScrollToTop.jsx";

describe("ScrollToTop Component", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders nothing to the DOM", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
  });

  it("scrolls to top (0, 0) when the route pathname changes", () => {
    const NavigationTrigger = () => {
      const navigate = useNavigate();
      return (
        <button onClick={() => navigate("/about")} data-testid="nav-btn">
          Navigate
        </button>
      );
    };

    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<NavigationTrigger />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Initial load triggers scrollTo
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

    // Trigger navigation inside act() to handle router state updates
    act(() => {
      getByTestId("nav-btn").click();
    });

    // Verify window.scrollTo was called again with (0, 0) upon pathname change
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});