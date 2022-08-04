import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const TopBooks = (props: Props) => {
  const styles = {
    booksContainer: {
      marginTop: "26px",
      marginBottom: "26px",
    },
  };
  return (
    <Grid container sx={styles.booksContainer}>
      <Grid item xs={6}>
        <Image src="/logo.png" alt="Book image" width={163} height={250} />
      </Grid>

      <Grid item xs={6}>
        <Image src="/logo.png" alt="Book image" width={163} height={250} />
      </Grid>
    </Grid>
  );
};

export default TopBooks;
