import { services, projects, quotes, stats } from "./content.js";

describe("Content Data Integrity", () => {
  describe("services export", () => {
    it("is a non-empty array with valid service structure [number, title, text]", () => {
      expect(Array.isArray(services)).toBe(true);
      expect(services.length).toBeGreaterThan(0);

      services.forEach(([number, title, text]) => {
        expect(typeof number).toBe("string");
        expect(typeof title).toBe("string");
        expect(typeof text).toBe("string");
      });
    });
  });

  describe("projects export", () => {
    it("is a non-empty array with required project properties", () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);

      projects.forEach((project) => {
        expect(project).toHaveProperty("name");
        expect(project).toHaveProperty("meta");
        expect(project).toHaveProperty("bg");
        expect(project).toHaveProperty("fg");
        expect(typeof project.name).toBe("string");
      });
    });
  });

  describe("quotes export", () => {
    it("is a non-empty array with required testimonial properties", () => {
      expect(Array.isArray(quotes)).toBe(true);
      expect(quotes.length).toBeGreaterThan(0);

      quotes.forEach((quote) => {
        expect(quote).toHaveProperty("text");
        expect(quote).toHaveProperty("name");
        expect(quote).toHaveProperty("role");
      });
    });
  });

  describe("stats export", () => {
    it("is a non-empty array with valid stats structure [value, label]", () => {
      expect(Array.isArray(stats)).toBe(true);
      expect(stats.length).toBeGreaterThan(0);

      stats.forEach(([value, label]) => {
        expect(typeof value).toBe("string");
        expect(typeof label).toBe("string");
      });
    });
  });
});