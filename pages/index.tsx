import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDebounce } from "use-debounce";

import { Box, Container } from "@mui/material";
import Books from "../src/components/Books";
import TopBooks from "../src/components/TopBooks";
import SearchBar from "../src/components/SearchBar";

import { styles } from "../styles/main";
import { BookType } from "../src/types/book";
import { API_URL } from "../src/utils/constants";

const Home: NextPage = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [books, setBooks] = useState<BookType[]>([]);
  const [search, setSearch] = useState<string>("");

  const searchHandler = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  const getBooks = async () => {
    const { data } = await axios.get(`${API_URL}?q=${search}`);
    setBooks(data.items);
  };

  const [debouncedSearch] = useDebounce<string>(search, 300);

  useEffect(() => {
    if (debouncedSearch) {
      getBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <Container>
      <Head>
        <title>Book App</title>
        <meta name="description" content="Google books application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box sx={styles.logoContainer}>
          <Image src="/logo.png" alt="App logo" width={135} height={39} />
        </Box>
        <SearchBar searchHandler={searchHandler} />
      </Box>

      {md ? (
        <Books books={books} />
      ) : (
        <>
          <TopBooks books={books.slice(0, 2)} />
          <Books books={books.slice(2)} />
        </>
      )}
    </Container>
  );
};

export default Home;
