import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the developer status text", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Hero />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/software developer · available for work/i)
    ).toBeInTheDocument();
  });

  it("renders the main headline", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Hero />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: /builds that feels alive\./i })
    ).toBeInTheDocument();
  });

  it("renders the introduction description text", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Hero />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/i’m suman, a software engineer crafting robust systems/i)
    ).toBeInTheDocument();
  });

  it("renders navigation action buttons with correct links", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Hero />
      </MemoryRouter>
    );

    const workLink = screen.getByRole("link", { name: /view my work/i });
    expect(workLink).toBeInTheDocument();
    expect(workLink).toHaveAttribute("href", "/work");

    const talkLink = screen.getByRole("link", { name: /let’s talk/i });
    expect(talkLink).toBeInTheDocument();
    expect(talkLink).toHaveAttribute("href", "/contact");
  });
});