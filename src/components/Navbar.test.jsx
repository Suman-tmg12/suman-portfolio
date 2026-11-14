import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "./Navbar.jsx";

// Helper wrapper to provide router context for NavLink and Link
const renderNavbar = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

describe("Navbar Component", () => {
  it("renders the brand logo with correct name and highlight", () => {
    renderNavbar();
    // Match with optional spaces/newlines introduced by child span normalization
    const logo = screen.getByRole("link", { name: /suman\s*\.\s*tamang/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders desktop navigation links", () => {
    renderNavbar();
    
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "/work");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });

  it("renders the 'Hire me' CTA button", () => {
    renderNavbar();
    const hireButton = screen.getByRole("link", { name: /hire me/i });
    expect(hireButton).toBeInTheDocument();
    expect(hireButton).toHaveAttribute("href", "/contact");
  });

  it("toggles the mobile menu when the hamburger button is clicked", () => {
    renderNavbar();
    
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toHaveTextContent("☰");

    // Open mobile menu
    fireEvent.click(menuButton);
    expect(menuButton).toHaveTextContent("✕");

    // Check that mobile navigation items are now visible
    const mobileServicesLinks = screen.getAllByRole("link", { name: "Services" });
    expect(mobileServicesLinks.length).toBeGreaterThan(1); // One desktop, one mobile

    // Close mobile menu by clicking a mobile nav link
    fireEvent.click(mobileServicesLinks[1]);
    expect(menuButton).toHaveTextContent("☰");
  });
});