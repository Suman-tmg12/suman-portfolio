import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "./Home.jsx";

// Mock IntersectionObserver required by child components (like Reveal/Stats)
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(element) {
    this.callback([{ isIntersecting: true, target: element }]);
  }
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver;

// Mock child components to isolate Home page composition and structure
jest.mock("../components/Hero.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-hero">Hero Component</div>,
}));

jest.mock("../components/Stats.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-stats">Stats Component</div>,
}));

jest.mock("../components/Marquee.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-marquee">Marquee Component</div>,
}));

jest.mock("../components/CtaBand.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-cta-band">CtaBand Component</div>,
}));

describe("Home Page", () => {
  const renderHomePage = () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

  it("renders core structural components like Hero, Stats, Marquee, and CtaBand", () => {
    renderHomePage();

    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-stats")).toBeInTheDocument();
    expect(screen.getByTestId("mock-marquee")).toBeInTheDocument();
    expect(screen.getByTestId("mock-cta-band")).toBeInTheDocument();
  });

  it("renders the Services section heading and preview cards", () => {
    renderHomePage();

    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Development")).toBeInTheDocument();
    expect(screen.getByText("Backend & APIs")).toBeInTheDocument();
    expect(screen.getByText("Database Engineering")).toBeInTheDocument();
  });

  it("renders the Selected Work section heading and project preview cards", () => {
    renderHomePage();

    expect(screen.getByText("Selected work")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    
    // Use getAllByText since project names might appear in multiple internal sub-elements of ProjectCard
    expect(screen.getAllByText("BabalEyewear").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Aalmari").length).toBeGreaterThan(0);
  });

  it("renders the Testimonials section and client quotes", () => {
    renderHomePage();

    expect(screen.getByText("Kind words")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("Maya Lin")).toBeInTheDocument();
    expect(screen.getByText("Daniel Okoye")).toBeInTheDocument();
    expect(screen.getByText("Sara Holm")).toBeInTheDocument();
  });

  it("renders navigation buttons for viewing all services and projects", () => {
    renderHomePage();

    const allServicesLink = screen.getByRole("link", { name: /all services/i });
    expect(allServicesLink).toBeInTheDocument();
    expect(allServicesLink).toHaveAttribute("href", "/services");

    const allProjectsLink = screen.getByRole("link", { name: /all projects/i });
    expect(allProjectsLink).toBeInTheDocument();
    expect(allProjectsLink).toHaveAttribute("href", "/work");
  });
});