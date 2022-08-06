import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useAppSelector } from "../../src/store/hooks";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import GoBack from "../../src/components/GoBack";
import Book from "../../src/components/Book";
import ReviewForm from "../../src/components/ReviewForm";
import Reviews from "../../src/components/Reviews";

import { API_URL } from "../../src/utils/constants";
import removeHTMLTags from "../../src/utils/removeHTMLTags";
import { BookType } from "../../src/types/book";
import { BookReviewType } from "../../src/types/review";

type Props = {
  book: BookType;
};

const BookDetail = ({ book }: Props) => {
  const router = useRouter();

  const [actualReview, setActualReview] = useState<
    BookReviewType | undefined
  >();

  const reviews = useAppSelector((state) => state.reviews.reviews);

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

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <GoBack to="/" />
      </Grid>

      <Grid container p={3}>
        <Grid item xs={12} md={4}>
          <Book book={book} size="regular" />
        </Grid>
        <Grid item xs={12} md={8} mt={3}>
          <Typography variant="body1">
            {removeHTMLTags(book.volumeInfo.description)}
          </Typography>
        </Grid>
      </Grid>

      <Grid container pl={3} pr={3}>
        <Divider sx={{ width: "100%", color: "#D9D9D9", height: "2px" }} />
      </Grid>

      <Grid container pl={3} pr={3}>
        <Reviews
          reviews={reviews.filter((rev) => rev.bookId === book.id).reverse()}
          setActualReview={setActualReview}
        />
      </Grid>

      <ReviewForm
        bookId={book.id}
        actualReview={actualReview}
        setActualReview={setActualReview}
      />
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
