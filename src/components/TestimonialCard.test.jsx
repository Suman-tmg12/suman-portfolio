import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialCard from "./TestimonialCard.jsx";

describe("TestimonialCard Component", () => {
  const defaultProps = {
    text: "Suman delivered robust backend architectures and clean code that transformed our e-commerce platform performance.",
    name: "Alex Rivera",
    role: "CTO at TechScale",
  };

  it("renders the quotation mark graphic element", () => {
    render(<TestimonialCard {...defaultProps} />);
    const quoteSymbol = screen.getByText("“");

    expect(quoteSymbol).toBeInTheDocument();
    expect(quoteSymbol).toHaveClass("text-brand", "text-6xl");
  });

  it("renders the testimonial text inside a blockquote element", () => {
    render(<TestimonialCard {...defaultProps} />);
    const blockquote = screen.getByText(defaultProps.text);

    expect(blockquote).toBeInTheDocument();
    expect(blockquote.tagName.toLowerCase()).toBe("blockquote");
    expect(blockquote).toHaveClass("text-[22px]", "leading-snug");
  });

  it("renders the client name and role correctly within a figcaption", () => {
    render(<TestimonialCard {...defaultProps} />);
    
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    
    const roleElement = screen.getByText(defaultProps.role);
    expect(roleElement).toBeInTheDocument();
    expect(roleElement.tagName.toLowerCase()).toBe("small");
    expect(roleElement).toHaveClass("text-muted");
  });

  it("renders as a semantic figure container with correct base background styling", () => {
    const { container } = render(<TestimonialCard {...defaultProps} />);
    const figureElement = container.firstChild;

    expect(figureElement).toBeInTheDocument();
    expect(figureElement.tagName.toLowerCase()).toBe("figure");
    expect(figureElement).toHaveClass("bg-ink", "p-10");
  });
});