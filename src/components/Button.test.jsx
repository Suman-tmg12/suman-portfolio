import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renders a regular button when 'to' prop is not provided", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a router Link when 'to' prop is provided", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Button to="/dashboard">Go to Dashboard</Button>
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link", { name: /go to dashboard/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/dashboard");
  });

  it("applies the correct variant classes", () => {
    render(<Button variant="outline">Outline Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /outline button/i });
    expect(buttonElement).toHaveClass("border", "border-white", "text-white");
  });
});