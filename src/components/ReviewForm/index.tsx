import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { FormReviewErrorsType } from "../../types/formReviewErrors";
import { BookReviewType, NewReviewType } from "../../types/review";

import { styles } from "./styles";
import { editReview, saveReview } from "../../store/slices/reviewsSlice";

type Props = {
  bookId: string;
  actualReview?: BookReviewType;
  setActualReview: Dispatch<SetStateAction<BookReviewType | undefined>>;
};

const ReviewForm = ({ bookId, actualReview, setActualReview }: Props) => {
  const dispatch = useAppDispatch();

  const [newReview, setNewReview] = useState<NewReviewType>({
    user: "",
    review: "",
  });

  const [formErrors, setFormErrors] = useState<FormReviewErrorsType>({
    user: false,
    review: false,
  });

  useEffect(() => {
    setNewReview({
      user: actualReview?.user ?? "",
      review: actualReview?.review ?? "",
    });
  }, [actualReview]);

  const validate = (values: NewReviewType) => {
    if (values.user !== "" && values.review !== "") {
      setFormErrors({ user: false, review: false });
      return true;
    }
    if (values.user === "") {
      setFormErrors((prev) => ({ ...prev, user: true }));
    }
    if (values.review === "") {
      setFormErrors((prev) => ({ ...prev, review: true }));
    }
    return false;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate(newReview)) {
      if (actualReview) {
        dispatch(
          editReview({
            ...(actualReview as BookReviewType),
            ...newReview,
            date: new Date(),
          })
        );
        setActualReview(undefined);
      } else {
        dispatch(
          saveReview({
            ...newReview,
            bookId,
            date: new Date(),
            reviewId: uuidv4(),
          })
        );
      }
      setNewReview({ user: "", review: "" });
    }
  };

  return (
    <Grid container p={3} display="block">
      <Typography variant="h6" mb={2}>
        Escribe una reseña
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          name="user"
          sx={styles.textField}
          onChange={(e) =>
            setNewReview((prev) => ({ ...prev, user: e.target.value }))
          }
          placeholder="Escribe aquí tu nombre de usuario"
          label="Nombre de usuario"
          fullWidth
          error={formErrors.user}
          helperText={formErrors.user && "Usuario requerido"}
          value={newReview.user}
        />

        <TextField
          name="review"
          sx={{ ...styles.textField, marginTop: "24px" }}
          onChange={(e) =>
            setNewReview((prev) => ({ ...prev, review: e.target.value }))
          }
          placeholder="Escribe aquí tu reseña"
          label="Reseña"
          fullWidth
          multiline
          rows={3}
          error={formErrors.review}
          helperText={formErrors.review && "Debes escribir una reseña"}
          value={newReview.review}
        />

        <Grid item xs={12} display="flex" justifyContent="end" mt={2}>
          <Button variant="contained" sx={styles.button} type="submit">
            Publicar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ReviewForm;
