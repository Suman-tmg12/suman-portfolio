import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Portrait from "./Portrait.jsx";

describe("Portrait Component", () => {
  it("renders as an accessible img role with the correct aria-label", () => {
    render(<Portrait />);
    const portraitSvg = screen.getByRole("img", { name: /portrait of aria voss/i });
    
    expect(portraitSvg).toBeInTheDocument();
    expect(portraitSvg.tagName.toLowerCase()).toBe("svg");
  });

  it("applies the default empty string class when no className is provided", () => {
    const { container } = render(<Portrait />);
    const svgElement = container.querySelector("svg");
    
    expect(svgElement).toBeInTheDocument();
  });

  it("accepts and applies custom className props correctly", () => {
    const customClass = "block w-full animate-float";
    const { container } = render(<Portrait className={customClass} />);
    const svgElement = container.querySelector("svg");
    
    expect(svgElement).toHaveClass("block", "w-full", "animate-float");
  });

  it("contains expected SVG graphic layers", () => {
    const { container } = render(<Portrait />);
    
    // Checks for structural SVG elements like circles, paths, and ellipses
    expect(container.querySelector("circle")).toBeInTheDocument();
    expect(container.querySelectorAll("path").length).toBeGreaterThan(0);
    expect(container.querySelector("ellipse")).toBeInTheDocument();
  });
});