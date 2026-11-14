import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./Contact.jsx";

// Mock child components to keep the unit test focused on the Contact page structure
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
  default: ({ children, className }) => (
    <section className={className} data-testid="mock-section">
      {children}
    </section>
  ),
}));

jest.mock("../components/ContactForm.jsx", () => ({
  __esModule: true,
  default: () => <form data-testid="mock-contact-form">Contact Form</form>,
}));

describe("Contact Page", () => {
  it("renders the PageHeader with correct props", () => {
    render(<Contact />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Let’s talk.");
    expect(
      screen.getByText("Tell me about your project or opportunity and I’ll reply within two working days.")
    ).toBeInTheDocument();
  });

  it("renders email information correctly", () => {
    render(<Contact />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("tamangrani534@gmail.com")).toBeInTheDocument();
  });

  it("renders external social and messaging links with correct hrefs and attributes", () => {
    render(<Contact />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/Suman-tmg12");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/suman-tamang-dev/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    const whatsappLink = screen.getByRole("link", { name: /whatsapp/i });
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/9779747808016");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the ContactForm component", () => {
    render(<Contact />);

    expect(screen.getByTestId("mock-contact-form")).toBeInTheDocument();
  });
});