import Link from "next/link";
import { Grid } from "@mui/material";
import Book from "../Book";
import { BookType } from "../../types/book";

type Props = {
  books: BookType[];
};

const Books = ({ books }: Props) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid key={book.id} item xs={4}>
          <Link href={`/detail/${book.id}`}>
            <a>
              <Book book={book} size="small" />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
