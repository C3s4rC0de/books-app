import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BookReviewType } from "../../types/review";

export interface ReviewsState {
  reviews: BookReviewType[];
}

const initialState: ReviewsState = {
  reviews: [],
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    saveReview: (
      state: ReviewsState,
      action: PayloadAction<BookReviewType>
    ) => {
      state.reviews = [...state.reviews, action.payload];
    },
    deleteReview: (state: ReviewsState, action: PayloadAction<string>) => {
      state.reviews.filter((review) => review.bookId !== action.payload);
    },
    editReview: (
      state: ReviewsState,
      action: PayloadAction<BookReviewType>
    ) => {
      state.reviews.map((review) => {
        if (review.bookId === action.payload.bookId) {
          return { ...action.payload };
        }
        return review;
      });
    },
  },
});

export const { saveReview, deleteReview, editReview } = reviewSlice.actions;

export default reviewSlice.reducer;
