import Link from "next/link";
import { Grid } from "@mui/material";
import Book from "../Book";

import { BookType } from "../../types/book";

type Props = {
  books: BookType[];
};

const TopBooks = ({ books }: Props) => {
  return (
    <Grid container mt="26px" mb="26px" spacing={1}>
      {books.map((book) => (
        <Grid key={book.id} item xs={6}>
          <Link href={`/detail/${book.id}`}>
            <a>
              <Book book={book} size="regular" />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopBooks;
