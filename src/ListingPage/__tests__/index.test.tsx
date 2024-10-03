import { screen, render } from "@testing-library/react";
import Panel from "../components/Panel";

describe("ListingPage Panel component renders without errors", () => {
  it("should render Panel with 'Page: 1' h1 text", () => {
    render(<Panel />);

    const textElement=screen.getByRole('heading', { level: 3 })


    expect(textElement.innerHTML).toBe("Page: 1")
    
  });
});

describe("Retrieving lists", () => {
  it("should render Amount of pages with 'Page: 1' h1 text", () => {
    render(<Panel />);

    const textElement=screen.getByRole('heading', { level: 3 })


    expect(textElement.innerHTML).toBe("Page: 1")
    
  });
});