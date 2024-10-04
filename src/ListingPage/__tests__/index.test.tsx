import { screen, render, waitFor } from "@testing-library/react";
import Panel from "../components/Panel";


// due to Axios and MSW issues, the data is fetched from both MSW server and backend. 
// But the data returned from backend overwrites the data fetched from MSW server.
// Therefore, before running Listing tests, need to upload data.csv on the browser.

describe("ListingPage Panel component renders without errors", () => {
  it("should render Panel with 'Page: 1' h1 text", () => {
    render(<Panel />);

    const textElement=screen.getByRole('heading', { level: 3 })


    expect(textElement.innerHTML).toBe("Page: 1")
    
  });
});

describe("Retrieving lists (Must upload csv file first due to Axios issues)",  () => {
  it("should render 50 pagination with file size of 502 lines", async () => {
    render(<Panel />);


    const paginationButtonElements = await waitFor(()=>screen.getAllByTestId("paginationButton"))


    expect(paginationButtonElements.length).toEqual(20)
    
  });

  it("should render 25 cards per page", async () => {
    render(<Panel />);


    const cardElements = await waitFor(()=>screen.getAllByTestId("cards"))


    expect(cardElements.length).toEqual(25)
    
  });

  
});