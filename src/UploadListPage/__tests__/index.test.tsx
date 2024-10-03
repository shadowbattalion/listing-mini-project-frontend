import { screen, render, waitFor } from "@testing-library/react";
import Panel from "../components/Panel";
import userEvent from '@testing-library/user-event';


describe("UploadListPage Panel component renders without errors", () => {
  it("should show 'No file chosen' when accessing the page", async () => {
    render(<Panel />);
    expect(screen.queryByText('No file chosen'));
  })
  
});


describe("File upload", () => {

  it("should send the file", async () => {
    render(<Panel />);
    const user = userEvent.setup();
      
    const str = JSON.stringify({mock:"test"});
    const blob = new Blob([str]);
    const file = new File([blob], 'data.csv');
    File.prototype.text = vitest.fn().mockResolvedValueOnce(str);

    const uploadElement = screen.getByTestId('upload');
    await user.upload(uploadElement, file);
    // expect(screen.getByText('data.csv')).toBeInTheDocument();

    const uploadButtonElement=screen.getByTestId('uploadButton');
    await user.click(uploadButtonElement)
    expect(screen.getByText('file uploaded successfully')).toBeInTheDocument();

   

  })
  
});