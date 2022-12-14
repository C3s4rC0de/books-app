export type NewReviewType = {
  user: string;
  review: string;
};

export type BookReviewType = {
  user: string;
  reviewId: string;
  review: string;
  bookId: string;
  date: Date;
};
