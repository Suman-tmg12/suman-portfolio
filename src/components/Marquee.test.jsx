import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Marquee from "./Marquee.jsx";

describe("Marquee Component", () => {
  const expectedText = "Full-Stack Dev ✦ Backend Architecture ✦ Database Design ✦ REST APIs ✦ Clean Code ✦ ";

  it("renders the marquee container with correct styling classes", () => {
    const { container } = render(<Marquee />);
    const outerDiv = container.firstChild;
    
    expect(outerDiv).toHaveClass("overflow-hidden", "whitespace-nowrap", "bg-brand", "py-4", "text-3xl", "font-bold", "text-ink");
  });

  it("repeats the text 4 times inside the animated track", () => {
    render(<Marquee />);
    
    const repeatedContent = expectedText.repeat(4).trim();
    // Use a custom matcher function to safely handle internal whitespace differences
    const marqueeElement = screen.getByText((content) => content.trim().includes(repeatedContent));
    
    expect(marqueeElement).toBeInTheDocument();
  });

  it("applies the animate-marquee animation class", () => {
    const { container } = render(<Marquee />);
    const animatedDiv = container.querySelector(".animate-marquee");
    
    expect(animatedDiv).toBeInTheDocument();
    expect(animatedDiv).toHaveClass("inline-block", "animate-marquee");
  });
});