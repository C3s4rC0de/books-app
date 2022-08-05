import { Dispatch, SetStateAction } from "react";
import { Box, Typography } from "@mui/material";
import Review from "../Review";
import { BookReviewType } from "../../types/review";

type Props = {
  reviews: BookReviewType[];
  setActualReview: Dispatch<SetStateAction<BookReviewType | undefined>>;
};

const Reviews = ({ reviews, setActualReview }: Props) => {
  return (
    <Box width="100%">
      {reviews.length > 0 && (
        <Typography variant="h6" mt={2} mb={2}>
          Reseñas
        </Typography>
      )}
      {reviews.map((review) => (
        <Box key={review.reviewId}>
          <Review review={review} setActualReview={setActualReview} />
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
