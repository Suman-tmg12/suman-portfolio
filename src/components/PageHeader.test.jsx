import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeader from "./PageHeader.jsx";

describe("PageHeader Component", () => {
  const defaultProps = {
    label: "Portfolio",
    title: "Selected Work",
    text: "A collection of projects built with precision and scale.",
  };

  it("renders the label with uppercase styling text", () => {
    render(<PageHeader {...defaultProps} />);
    const labelElement = screen.getByText(defaultProps.label);
    
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("text-brand", "uppercase");
  });

  it("renders the main heading title correctly", () => {
    render(<PageHeader {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 1 });
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(defaultProps.title);
  });

  it("renders the optional description text when provided", () => {
    render(<PageHeader {...defaultProps} />);
    const textElement = screen.getByText(defaultProps.text);
    
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-neutral-300");
  });

  it("does not render the description paragraph when text prop is omitted", () => {
    const { container } = render(<PageHeader label="Contact" title="Get in Touch" />);
    
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Get in Touch");
    // Ensure no secondary paragraph exists beyond the label and title
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(1); // Only the label paragraph should exist
  });
});