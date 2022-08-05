import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import ReactTimeAgo from "react-time-ago";

import { BookReviewType } from "../../types/review";
import { useAppDispatch } from "../../store/hooks";
import { deleteReview } from "../../store/slices/reviewsSlice";

type Props = {
  review: BookReviewType;
  setActualReview: Dispatch<SetStateAction<BookReviewType | undefined>>;
};

const Review = ({ review, setActualReview }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteReview(review.reviewId));
    handleClose();
  };

  const handleEdit = () => {
    setActualReview(review);
  };

  return (
    <Box mt={2} mb={2}>
      <Typography variant="subtitle1">{review.review}</Typography>

      <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
        <Box display="flex">
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            {review.user}
          </Typography>

          <Typography ml={2} variant="caption" sx={{ color: "#A5A5A2" }}>
            &bull; <ReactTimeAgo date={review.date} locale="es-MX" />
          </Typography>
        </Box>

        <Box display="flex">
          <Box mr={2}>
            <EditOutlined onClick={() => handleEdit()} />
          </Box>

          <Box>
            <DeleteOutline onClick={() => setShowModal(true)} />
          </Box>
        </Box>
      </Box>

      <Dialog
        onClose={handleClose}
        open={showModal}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px",
            padding: "8px",
          },
        }}
      >
        <DialogTitle textAlign="center">
          ¿Quieres eliminar esta reseña?
        </DialogTitle>

        <DialogActions sx={{ flexDirection: "column" }}>
          <Button
            variant="contained"
            sx={{ width: "100%", boxShadow: "none", marginBottom: "16px" }}
            onClick={handleDelete}
          >
            Eliminar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%", boxShadow: "none", margin: "0px !important" }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Review;
