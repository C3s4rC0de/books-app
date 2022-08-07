import { render, screen } from "../test/test-utils";

import Home from "../pages";
import React from "react";

describe("Home page tests", () => {
  it("Should render the app logo", () => {
    render(<Home />);
    const logo = screen.getByAltText(/app logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("Should render the search bar", () => {
    render(<Home />);
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/buscar libro/i);

    expect(searchInput).toBeInTheDocument();
  });
});
