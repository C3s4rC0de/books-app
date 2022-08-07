import { fireEvent, render, screen, waitFor } from "../../../test/test-utils";
import Review from ".";
import { BookReviewType } from "../../types/review";

const dummyReview: BookReviewType = {
  user: "Juan",
  reviewId: "900",
  review: "Test review",
  bookId: "8000",
  date: new Date(),
};
const mock = jest.fn();

jest.mock("javascript-time-ago");
jest.mock("react-time-ago");

describe("Review component tests", () => {
  it("Should render the review info", () => {
    render(<Review review={dummyReview} setActualReview={mock} />);
    const user = screen.getByText(/juan/i);
    expect(user).toBeInTheDocument();

    const review = screen.getByText(/test review/i);
    expect(review).toBeInTheDocument();
  });

  it("Should render edit and delete buttons", () => {
    render(<Review review={dummyReview} setActualReview={mock} />);

    const editIcon = screen.getByTestId(/EditOutlinedIcon/);
    expect(editIcon).toBeInTheDocument();

    const deleteIcon = screen.getByTestId(/DeleteOutlineIcon/);
    expect(deleteIcon).toBeInTheDocument();
  });

  it("Should call setActualReview when click on edit", () => {
    render(<Review review={dummyReview} setActualReview={mock} />);

    const editIcon = screen.getByTestId(/EditOutlinedIcon/);
    fireEvent.click(editIcon);

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("Should show delete message when click on delete", () => {
    render(<Review review={dummyReview} setActualReview={mock} />);
    const deleteIcon = screen.getByTestId(/DeleteOutlineIcon/);

    fireEvent.click(deleteIcon);
    const deleteMessage = screen.getByText(/¿quieres eliminar esta reseña?/i);
    expect(deleteMessage).toBeInTheDocument();
  });

  it("Shouldn't show the delete options when click on cancel button", async () => {
    render(<Review review={dummyReview} setActualReview={mock} />);

    const deleteIcon = screen.getByTestId(/DeleteOutlineIcon/);
    fireEvent.click(deleteIcon);

    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    fireEvent.click(cancelButton);

    await waitFor(() => {
      const cancelButton = screen.queryByRole("button", { name: /cancelar/i });
      expect(cancelButton).not.toBeInTheDocument();
    });
  });
});
