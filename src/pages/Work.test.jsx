import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Work from "./Work.jsx";

// Mock child components to isolate the Work page composition
jest.mock("../components/PageHeader.jsx", () => ({
  __esModule: true,
  default: ({ label, title, text }) => (
    <div data-testid="mock-page-header">
      <span>{label}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  ),
}));

jest.mock("../components/Section.jsx", () => ({
  __esModule: true,
  default: ({ children, light, className }) => (
    <section data-testid="mock-section" data-light={light} className={className}>
      {children}
    </section>
  ),
}));

jest.mock("../components/CtaBand.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-cta-band">CtaBand Component</div>,
}));

describe("Work Page", () => {
  const renderWorkPage = () =>
    render(
      <BrowserRouter>
        <Work />
      </BrowserRouter>
    );

  it("renders the PageHeader with correct props", () => {
    renderWorkPage();

    expect(screen.getByText("Selected work")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Projects");
    expect(
      screen.getByText("A look at recent web applications and platforms I’ve engineered for startups and growing brands.")
    ).toBeInTheDocument();
  });

  it("renders the Section wrapper with the light prop enabled", () => {
    renderWorkPage();

    const section = screen.getByTestId("mock-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("data-light", "true");
  });

  it("renders all project cards mapped from content data", () => {
    renderWorkPage();

    // Verify project names from content.js are rendered (using getAllByText for multi-match elements)
    expect(screen.getAllByText("BabalEyewear").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Aalmari").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Fintech Core").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TaskFlow Manager").length).toBeGreaterThan(0);
  });

  it("renders the CtaBand component at the bottom", () => {
    renderWorkPage();

    expect(screen.getByTestId("mock-cta-band")).toBeInTheDocument();
  });
});