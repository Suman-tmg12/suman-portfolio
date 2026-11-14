import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the copyright text correctly", () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/© 2026 Suman Tamang/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  it("renders the GitHub link with correct attributes", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/Suman-tmg12");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the LinkedIn link with correct attributes", () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/suman-tamang-dev/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the WhatsApp link with correct attributes", () => {
    render(<Footer />);
    const whatsappLink = screen.getByRole("link", { name: /whatsapp/i });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/9779747808016");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});