import { screen, render, waitFor } from "@testing-library/react";
import Panel from "../components/Panel";
import userEvent from '@testing-library/user-event';

const user = userEvent.setup()


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

describe("Retrieving lists",  () => {

  it("should render 25 cards per page", async () => {
    render(<Panel />);


    const cardElements = await waitFor(()=>screen.getAllByTestId("cards"))


    expect(cardElements.length).toEqual(25)
    
  });


  it("should have 20 pagination button", async () => {
    render(<Panel />);


    const paginationButton = await waitFor(()=>screen.getAllByTestId("paginationButton"))


    expect(paginationButton.length).toEqual(20)
    
  });

  it("should be able to go to certain page (example page 5) and detect Page: 5 title", async () => {
    render(<Panel />);


    const paginationButton = await waitFor(()=>screen.getAllByTestId("paginationButton"))

    user.click(paginationButton[4])

    expect((await screen.findByText("Page: 5"))).toBeInTheDocument()
    
  });

  

  it("should be able to go to next and previous. (press next to page two and three and press previous back to page two and one)", async () => {
    render(<Panel />);

    
    const nextButton = await waitFor(()=>screen.getByTestId("next"))

    user.click(nextButton)
    expect((await screen.findByText(`Page: 2`))).toBeInTheDocument()

    user.click(nextButton)
    expect((await screen.findByText(`Page: 3`))).toBeInTheDocument()


    const prevButton = await waitFor(()=>screen.getByTestId("prev"))
    user.click(prevButton)
    expect((await screen.findByText(`Page: 2`))).toBeInTheDocument()

    user.click(prevButton)
    expect((await screen.findByText(`Page: 1`))).toBeInTheDocument()

    
  });

  

  it("search for email", async () => {
    render(<Panel />);

    const search = await waitFor(()=>screen.getByTestId("search"))

    user.type(search,"Page number 1")

    const searchResult = await screen.findAllByText(/Page number 1/i)

    expect(searchResult[0]).toBeInTheDocument()
    
  });

  
});