import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Book from "../../src/components/Book";

import { API_URL } from "../../src/utils/constants";
import removeHTMLTags from "../../src/utils/removeHTMLTags";
import { BookType } from "../../src/types/book";
import { styles } from "./styles";
import { ReviewType } from "../../src/types/review";
import { useEffect, useState } from "react";
import { FormReviewErrorsType } from "../../src/types/formReviewErrors";

type Props = {
  book: BookType;
};

const BookDetail = ({ book }: Props) => {
  const router = useRouter();

  const [newReview, setNewReview] = useState<ReviewType>({
    user: "",
    review: "",
  });

  const [formErrors, setFormErrors] = useState<FormReviewErrorsType>({
    user: false,
    review: false,
  });

  if (router.isFallback)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />{" "}
        <Typography variant="h4" ml={2}>
          Cargando...
        </Typography>
      </Box>
    );

  const validate = (values: ReviewType) => {
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
      console.log("Guardando...");
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Link href="/">
          <a>
            <IconButton sx={{ color: "gray" }} aria-label="go back">
              <ArrowBack />
            </IconButton>
          </a>
        </Link>
      </Grid>

      <Grid container p={3}>
        <Grid item xs={12}>
          <Book book={book} size="regular" />
        </Grid>
        <Grid item xs={12} mt={3}>
          <Typography variant="body1">
            {removeHTMLTags(book.volumeInfo.description)}
          </Typography>
        </Grid>
      </Grid>

      <Grid container pl={3} pr={3}>
        <Divider sx={{ width: "100%", color: "#D9D9D9", height: "2px" }} />
      </Grid>

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
          />
          <Grid item xs={12} display="flex" justifyContent="end" mt={2}>
            <Button variant="contained" sx={styles.button} type="submit">
              Publicar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let book: BookType | undefined;
  try {
    const { data } = await axios.get(`${API_URL}/${params?.id}`);
    book = data;
  } catch (error) {}

  const notFound = book ? false : true;

  return {
    props: {
      book,
    },
    notFound,
  };
};

export default BookDetail;
