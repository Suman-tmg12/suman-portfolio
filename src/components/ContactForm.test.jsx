import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";

// Mock global fetch and window.alert before tests run
beforeEach(() => {
  global.fetch = jest.fn();
  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ContactForm Component", () => {
  it("renders all form fields and submit button", () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tell me about your project")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("allows user to type into input fields", () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("Email address");
    const messageInput = screen.getByPlaceholderText("Tell me about your project");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "I need a website built." } });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(messageInput.value).toBe("I need a website built.");
  });

  it("submits the form successfully and displays thank you message", async () => {
    // Mock a successful fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
    });

    render(<ContactForm />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email address"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Tell me about your project"), { target: { value: "Let's work together!" } });

    // Click submit
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    // Verify fetch was called with the correct URL and data payload
    expect(global.fetch).toHaveBeenCalledWith(
      "https://formspree.io/f/xyeeqejv",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "John Doe",
          email: "john@example.com",
          message: "Let's work together!",
        }),
      })
    );

    // Wait for the success state/message to render
    await waitFor(() => {
      expect(
        screen.getByText(/thanks john! your message has been sent/i)
      ).toBeInTheDocument();
    });
  });

  it("shows an alert if the server returns an error response", async () => {
    // Mock a failed fetch response
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email address"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Tell me about your project"), { target: { value: "Test message" } });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Something went wrong. Please try again.");
    });
  });
});