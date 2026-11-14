import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stats from "./Stats.jsx";

// Mock the stats data module imported by Stats.jsx
jest.mock("../data/content.js", () => ({
  stats: [
    ["2+", "Years Experience"],
    ["15+", "Projects Completed"],
    ["100%", "Client Satisfaction"],
  ],
}));

// Mock IntersectionObserver
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

// Mock requestAnimationFrame and cancelAnimationFrame for smooth tick animation
let rafCallbacks = [];
window.requestAnimationFrame = (cb) => {
  rafCallbacks.push(cb);
  return rafCallbacks.length;
};
window.cancelAnimationFrame = () => {
  rafCallbacks = [];
};

// Helper function to run all queued animation frames
const flushAnimations = (timestamp = 2000) => {
  act(() => {
    const cbs = [...rafCallbacks];
    rafCallbacks = [];
    cbs.forEach((cb) => cb(timestamp));
  });
};

describe("Stats Component", () => {
  beforeEach(() => {
    jest.spyOn(performance, "now").mockReturnValue(0);
    rafCallbacks = [];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all statistics labels correctly", () => {
    render(<Stats />);

    expect(screen.getByText("Years Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects Completed")).toBeInTheDocument();
    expect(screen.getByText("Client Satisfaction")).toBeInTheDocument();
  });

  it("initializes count up values and animates them to target numbers with suffixes", () => {
    render(<Stats />);

    // Initially starts at 0 with suffixes attached (multiple 0+ elements exist)
    const initialZeros = screen.getAllByText((content, node) => node.textContent === "0+");
    expect(initialZeros.length).toBe(2);

    // Advance performance time and flush animation frames to complete the count up
    act(() => {
      jest.spyOn(performance, "now").mockReturnValue(1600);
    });
    flushAnimations(1600);

    // Verify final counts rendered with original suffixes ("2+", "15+", "100%")
    expect(screen.getByText("2+")).toBeInTheDocument();
    expect(screen.getByText("15+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});