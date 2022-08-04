import { Box, Container, Grid, TextField } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TopBooks from "../components/TopBooks";

const Home: NextPage = () => {
  const styles = {
    logoContainer: {
      margin: "16px",
      marginTop: "26px",
    },
  };

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
        <Box>
          <TextField placeholder="Buscar libro" fullWidth></TextField>
        </Box>
      </Box>

      <TopBooks />
    </Container>
  );
};

export default Home;
