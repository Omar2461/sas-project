// page.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

jest.mock("../i18n", () => ({}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "en" },
  }),
}));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders at least one main heading (h1)", () => {
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders at least one paragraph mentioning "security"', () => {
    const paragraphs = screen.getAllByText(/security/i);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('renders the "Book a Demo" button', () => {
    const button = screen.getByRole("button", { name: /book a demo/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the "Unique features" section heading', () => {
    const featuresHeading = screen.getByRole("heading", {
      name: /unique features/i,
    });
    expect(featuresHeading).toBeInTheDocument();
  });
});
