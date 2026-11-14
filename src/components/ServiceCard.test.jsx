import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServiceCard from "./ServiceCard.jsx";

describe("ServiceCard Component", () => {
  const defaultProps = {
    number: "01",
    title: "Backend Development",
    text: "Building robust APIs and server-side architecture using Java and Node.js.",
  };

  it("renders the service index number correctly", () => {
    render(<ServiceCard {...defaultProps} />);
    const numberElement = screen.getByText(defaultProps.number);

    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass("text-sm", "text-brand");
  });

  it("renders the service title inside an h3 heading", () => {
    render(<ServiceCard {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(defaultProps.title);
    expect(heading).toHaveClass("text-2xl", "font-bold");
  });

  it("renders the service description text", () => {
    render(<ServiceCard {...defaultProps} />);
    const textElement = screen.getByText(defaultProps.text);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("leading-relaxed", "text-muted");
  });

  it("applies base background and styling classes", () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const cardElement = container.firstChild;

    expect(cardElement).toHaveClass("group", "bg-ink", "p-9", "transition-colors", "hover:bg-brand", "hover:text-ink");
  });
});