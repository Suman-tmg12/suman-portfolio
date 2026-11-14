import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reveal from "./Reveal.jsx";

// Mock IntersectionObserver since it is not available in Node/Jest DOM environment
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(element) {
    // Automatically trigger intersection for testing
    this.callback([{ isIntersecting: true, target: element }]);
  }
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver;

describe("Reveal Component", () => {
  it("renders children correctly", () => {
    render(
      <Reveal>
        <p>Revealed Content</p>
      </Reveal>
    );

    expect(screen.getByText("Revealed Content")).toBeInTheDocument();
  });

  it("applies initial hidden transition state and updates when intersecting", () => {
    const { container } = render(
      <Reveal delay={200} className="custom-wrapper-class">
        <span>Test Animation</span>
      </Reveal>
    );

    const wrapper = container.firstChild;

    // Check custom transition delay style and className integration
    expect(wrapper).toHaveStyle({ transitionDelay: "200ms" });
    expect(wrapper).toHaveClass("transition-all duration-700 ease-out custom-wrapper-class");
    
    // Once intersection triggers in our mock, it transitions to shown state
    expect(wrapper).toHaveClass("translate-y-0 opacity-100");
  });
});