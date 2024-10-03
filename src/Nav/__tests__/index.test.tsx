import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from "..";

describe("Nav component renders without errors", () => {
  it("'Upload' text should be in Nav bar", () => {
    render(<Router><Nav /></Router>);
    
    const textElement=screen.getByText("Upload")

    expect(textElement).toBeInTheDocument();
  });

  it("'List' text should be in Nav bar", () => {
    render(<Router><Nav /></Router>);
    
    const textElement=screen.getByText("List")

    expect(textElement).toBeInTheDocument();
  });
});