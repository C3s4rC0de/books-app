import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { BookReviewType } from "../../types/review";
import Review from "../Review";

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
