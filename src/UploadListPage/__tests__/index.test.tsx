import { screen, render, waitFor } from "@testing-library/react";
import Panel from "../components/Panel";
import userEvent from '@testing-library/user-event';

// due to Axios and MSW issues, the data is fetched from both MSW server and backend. 
// But the data returned from backend overwrites the data fetched from MSW server.
// Therefore, before running Listing tests, need to upload data.csv on the browser.


describe("UploadListPage Panel component renders without errors", () => {
  it("should show 'Upload A File' when accessing the page", async () => {
    render(<Panel />);
    expect(screen.getByText('Upload A File'));
  })
  
});


describe("File upload", () => {

  it("should show 'Please enter a file' when clicking on upload without input file", async () => {

    render(<Panel />);
    const user = userEvent.setup();
      

    const uploadButtonElement=screen.getByTestId('uploadButton');
    await user.click(uploadButtonElement)
    expect(screen.getByText('Please enter a file')).toBeInTheDocument();

  })
  

  it("should send the file", async () => {

    render(<Panel />);
    const user = userEvent.setup();
      
    const str = JSON.stringify({mock:"test"});
    const blob = new Blob([str]);
    const file = new File([blob], 'data.csv', { type: 'text/plain' });


    const uploadElement = screen.getByTestId('upload');
    await user.upload(uploadElement, file);
    
    
    const uploadButtonElement=screen.getByTestId('uploadButton');
    await user.click(uploadButtonElement)
    expect(screen.queryByText('File uploaded successfully'))

   

  })
  
});