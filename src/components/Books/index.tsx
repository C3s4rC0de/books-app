import Link from "next/link";
import { Grid } from "@mui/material";
import Book from "../Book";
import { BookType } from "../../types/book";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  books: BookType[];
};

const Books = ({ books }: Props) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container mt="26px" spacing={2}>
      {books.map((book) => (
        <Grid key={book.id} item xs={4} md={2}>
          <Link href={`/detail/${book.id}`}>
            <a>
              <Book book={book} size={md ? "regular" : "small"} />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
