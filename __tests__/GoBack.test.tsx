import { render, screen } from "../test/test-utils";

import GoBack from "../src/components/GoBack";
import React from "react";

describe("GoBack component tests", () => {
  it("Should have the correct href", () => {
    render(<GoBack to="https://www.test.com" />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.test.com"
    );
  });
});
