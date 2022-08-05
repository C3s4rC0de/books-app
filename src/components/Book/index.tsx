import Image from "next/image";

import { Rating } from "react-simple-star-rating";
import { Box, Typography } from "@mui/material";

import { BookType } from "../../types/book";
import { styles } from "./style";

type Props = {
  book: BookType;
  size: "regular" | "small";
};

const Book = ({ book, size }: Props) => {
  return (
    <Box sx={styles.bookContainer}>
      <Image
        style={{
          borderRadius: size === "regular" ? "20px" : "10px",
          border: "1px solid #000",
        }}
        width={size === "regular" ? 163 : 92.53}
        height={size === "regular" ? 250 : 125.8}
        alt="book thumbnail"
        src={book.volumeInfo?.imageLinks?.smallThumbnail ?? ""}
      />

      <Box mt={1}>
        <Rating
          readonly
          size={size === "regular" ? 20 : 15}
          ratingValue={book.volumeInfo.averageRating * 20}
        />
      </Box>

      <Typography
        variant={size === "regular" ? "subtitle1" : "caption"}
        sx={{ color: "gray" }}
      >
        {book.volumeInfo.title}
      </Typography>

      <Typography
        variant={size === "regular" ? "body2" : "caption"}
        sx={{ fontStyle: "italic" }}
      >
        {book.volumeInfo.authors?.map((author) => (
          <span key={author}>{author}</span>
        ))}
      </Typography>
    </Box>
  );
};

export default Book;
