import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ProjectCard from "./ProjectCard.jsx";

const renderProjectCard = (props) =>
  render(
    <BrowserRouter>
      <ProjectCard {...props} />
    </BrowserRouter>
  );

describe("ProjectCard Component", () => {
  const defaultProps = {
    name: "Babal Eyewear",
    meta: "E-Commerce",
    bg: "#ff5a1f",
    fg: "#ffffff",
  };

  it("renders the project link pointing to /contact", () => {
    renderProjectCard(defaultProps);
    const cardLink = screen.getByRole("link");
    
    expect(cardLink).toBeInTheDocument();
    expect(cardLink).toHaveAttribute("href", "/contact");
  });

  it("renders the abbreviated project name inside the visual preview box", () => {
    renderProjectCard(defaultProps);
    // name.split(" ")[0] extracts "Babal"
    const previewText = screen.getByText("Babal");
    
    expect(previewText).toBeInTheDocument();
  });

  it("applies the custom inline background and foreground color styles", () => {
    renderProjectCard(defaultProps);
    const previewBox = screen.getByText("Babal");
    
    expect(previewBox).toHaveStyle({
      background: "#ff5a1f",
      color: "#ffffff",
    });
  });

  it("renders the full project name and metadata label correctly", () => {
    renderProjectCard(defaultProps);
    
    expect(screen.getByText("Babal Eyewear")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce")).toBeInTheDocument();
  });
});