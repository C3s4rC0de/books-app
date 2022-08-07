import { render, screen } from "../../../test/test-utils";

import GoBack from ".";

describe("GoBack component tests", () => {
  it("Should have the correct href", () => {
    render(<GoBack to="https://www.test.com" />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.test.com"
    );
  });
});
