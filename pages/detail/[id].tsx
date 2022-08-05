import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Book from "../../src/components/Book";
import ReviewForm from "../../src/components/ReviewForm";

import { API_URL } from "../../src/utils/constants";
import removeHTMLTags from "../../src/utils/removeHTMLTags";
import { BookType } from "../../src/types/book";

import { useAppSelector } from "../../src/store/hooks";

type Props = {
  book: BookType;
};

const BookDetail = ({ book }: Props) => {
  const router = useRouter();

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

      <Grid container pl={3} pr={3}>
        {reviews
          .filter((rev) => rev.bookId === book.id)
          .map((review) => (
            // eslint-disable-next-line react/jsx-key
            <h6>{review.review}</h6>
          ))}
      </Grid>

      <ReviewForm bookId={book.id} />
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
