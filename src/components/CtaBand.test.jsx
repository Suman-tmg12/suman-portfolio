import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CtaBand from "./CtaBand";

describe("CtaBand Component", () => {
  it("renders the main heading correctly", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <CtaBand />
      </MemoryRouter>
    );

    const headingElement = screen.getByRole("heading", {
      name: /have a project in mind\?/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the action button link with correct destination", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <CtaBand />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", {
      name: /start a conversation/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/contact");
  });
});