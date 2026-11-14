import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Services from "./Services.jsx";

// Mock child components to isolate the Services page composition
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
  default: ({ children }) => <section data-testid="mock-section">{children}</section>,
}));

jest.mock("../components/CtaBand.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-cta-band">CtaBand Component</div>,
}));

describe("Services Page", () => {
  const renderServicesPage = () =>
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );

  it("renders the PageHeader with correct props", () => {
    renderServicesPage();

    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Services");
    expect(
      screen.getByText("From database schema to production deployment, here’s how I can help build and scale your software products.")
    ).toBeInTheDocument();
  });

  it("renders all service cards mapped from content data", () => {
    renderServicesPage();

    // Verify service titles from content.js are rendered
    expect(screen.getByText("Full-Stack Development")).toBeInTheDocument();
    expect(screen.getByText("Backend & APIs")).toBeInTheDocument();
    expect(screen.getByText("Database Engineering")).toBeInTheDocument();
    expect(screen.getByText("System Architecture")).toBeInTheDocument();
    expect(screen.getByText("Performance & Refactoring")).toBeInTheDocument();
    expect(screen.getByText("Code Audits & Review")).toBeInTheDocument();
  });

  it("renders the CtaBand component at the bottom", () => {
    renderServicesPage();

    expect(screen.getByTestId("mock-cta-band")).toBeInTheDocument();
  });
});