import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Section from "./Section.jsx";

describe("Section Component", () => {
  it("renders children content correctly", () => {
    render(
      <Section>
        <h2>Section Heading</h2>
      </Section>
    );

    expect(screen.getByRole("heading", { name: /section heading/i })).toBeInTheDocument();
  });

  it("applies default dark/base styling classes when light prop is false", () => {
    const { container } = render(<Section>Content</Section>);
    const sectionElement = container.querySelector("section");

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass("py-16 md:py-24");
    expect(sectionElement).not.toHaveClass("bg-white text-ink");
  });

  it("applies light theme styling classes when light prop is true", () => {
    const { container } = render(<Section light>Content</Section>);
    const sectionElement = container.querySelector("section");

    expect(sectionElement).toHaveClass("bg-white text-ink");
  });

  it("accepts and applies custom className props alongside default classes", () => {
    const { container } = render(<Section className="custom-section-class">Content</Section>);
    const sectionElement = container.querySelector("section");

    expect(sectionElement).toHaveClass("py-16 md:py-24 custom-section-class");
  });

  it("forwards extra HTML attributes/props correctly to the section element", () => {
    const { container } = render(<Section id="services-section" data-testid="custom-section">Content</Section>);
    const sectionElement = container.querySelector("section");

    expect(sectionElement).toHaveAttribute("id", "services-section");
    expect(sectionElement).toHaveAttribute("data-testid", "custom-section");
  });
});