import { render, screen, waitFor } from "../test/test-utils";
import ReviewForm from "../src/components/ReviewForm";
import { BookReviewType } from "../src/types/review";
import userEvent from "@testing-library/user-event";
import React from "react";

const dummyReview: BookReviewType = {
  user: "Juan",
  reviewId: "900",
  review: "Test review",
  bookId: "8000",
  date: new Date(),
};
const mock = jest.fn();

jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));

describe("ReviewForm component tests", () => {
  it("Should render text fields", () => {
    render(<ReviewForm bookId={dummyReview.bookId} setActualReview={mock} />);
    const userInput = screen.getByLabelText(/nombre de usuario/i);
    expect(userInput).toBeInTheDocument();

    const reviewInput = screen.getByLabelText(/reseña/i);
    expect(reviewInput).toBeInTheDocument();
  });

  it("Should not show review data if actual data is not provided", () => {
    render(<ReviewForm bookId={dummyReview.bookId} setActualReview={mock} />);
    const userInput: HTMLInputElement =
      screen.getByLabelText(/nombre de usuario/i);
    expect(userInput.value).toBe("");

    const reviewInput: HTMLInputElement = screen.getByLabelText(/reseña/i);
    expect(reviewInput.value).toBe("");
  });

  it("Should  show review data if actual data is provided", () => {
    render(
      <ReviewForm
        bookId={dummyReview.bookId}
        setActualReview={mock}
        actualReview={dummyReview}
      />
    );
    const userInput: HTMLInputElement =
      screen.getByLabelText(/nombre de usuario/i);
    expect(userInput.value).toBe(dummyReview.user);

    const reviewInput: HTMLInputElement = screen.getByLabelText(/reseña/i);
    expect(reviewInput.value).toBe(dummyReview.review);
  });

  it("Should be able to save the data that we type", () => {
    render(<ReviewForm bookId={dummyReview.bookId} setActualReview={mock} />);
    const userInput: HTMLInputElement =
      screen.getByLabelText(/nombre de usuario/i);
    const reviewInput: HTMLInputElement = screen.getByLabelText(/reseña/i);

    userEvent.type(userInput, "Test user");
    userEvent.type(reviewInput, "Test review");

    waitFor(() => {
      expect(userInput.value).toBe("Test user");
      expect(reviewInput.value).toBe("Test review");
    });
  });

  it("Should show errors if click on save with no data", () => {
    render(<ReviewForm bookId={dummyReview.bookId} setActualReview={mock} />);
    const saveButton = screen.getByRole("button", { name: /publicar/i });
    userEvent.click(saveButton);

    waitFor(() => {
      expect(screen.getByText(/usuario requerido/)).toBeInTheDocument();
      expect(screen.getByText(/debes escribir una reseña/)).toBeInTheDocument();
    });
  });
});
