import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionHeading from "./SectionHeading.jsx";

describe("SectionHeading Component", () => {
  const defaultProps = {
    label: "Services",
    title: "What I Can Do",
  };

  it("renders the category label with correct styling classes", () => {
    render(<SectionHeading {...defaultProps} />);
    const labelElement = screen.getByText(defaultProps.label);

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("text-sm", "uppercase", "tracking-[.15em]", "text-brand");
  });

  it("renders the section h2 heading title correctly", () => {
    render(<SectionHeading {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(defaultProps.title);
    expect(heading).toHaveClass("font-bold", "tracking-tight");
  });
});