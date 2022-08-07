import { render, screen, waitFor } from "../../../test/test-utils";
import Reviews from ".";
import { BookReviewType } from "../../types/review";
import { store } from "../../store/store";
import { deleteReview, saveReview } from "../../store/slices/reviewsSlice";

const dummyReviews: BookReviewType[] = [
  {
    user: "Juan",
    reviewId: "900",
    review: "First review",
    bookId: "8000",
    date: new Date(),
  },
  {
    user: "Pepe",
    reviewId: "901",
    review: "Second review ",
    bookId: "8001",
    date: new Date(),
  },
];
const mock = jest.fn();

jest.mock("javascript-time-ago");
jest.mock("react-time-ago");

describe("Reviews component tests", () => {
  it("Should render the reviews info", () => {
    render(<Reviews reviews={dummyReviews} setActualReview={mock} />);
    const user1 = screen.getByText(/juan/i);
    expect(user1).toBeInTheDocument();

    const review1 = screen.getByText(/first review/i);
    expect(review1).toBeInTheDocument();

    const user2 = screen.getByText(/pepe/i);
    expect(user2).toBeInTheDocument();

    const review2 = screen.getByText(/second review/i);
    expect(review2).toBeInTheDocument();
  });

  it("Should delete review on redux state if call deleteReview", async () => {
    store.dispatch(saveReview(dummyReviews[0]));
    store.dispatch(saveReview(dummyReviews[1]));

    const reviewsStore = store.getState().reviews.reviews;

    store.dispatch(deleteReview(dummyReviews[0].reviewId));

    waitFor(() => {
      expect(reviewsStore).toHaveLength(1);
    });
  });
});
