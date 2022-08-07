import { render, screen, waitFor } from "../../../test/test-utils";
import userEvent from "@testing-library/user-event";

import SearchBar from ".";

const mock = jest.fn();

describe("SearchBar component tests", () => {
  it("Should call search handler when we type on searchbar", () => {
    render(<SearchBar searchHandler={mock} />);
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/buscar libro/i);

    userEvent.type(searchInput, "Test");

    waitFor(() => {
      expect(mock).toHaveBeenCalled();
    });
  });
});
