import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box/Box";
import Footer from "../../components/Footer";

export default function MainConcepts() {
  return (
    <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"} position={"relative"} flexDirection={"column"}>
      <Container sx={{ padding: 6 }} maxWidth={"md"}>
        <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
          Main Concepts
        </Typography>
        <section>
          <article>
            <Typography variant={"body1"} mb={3}>
              Now that we have seen the hook in action, let us try to understand how everything works and how to use
              this hook to manage states as per your will. We look at the basic principle and them move on to advance
              usage and customisations.
            </Typography>
          </article>
        </section>
      </Container>
      <Container
        maxWidth={"lg"}
        sx={{ position: "absolute", left: 0, bottom: 0, right: 0, paddingBottom: (theme) => theme.spacing(6) }}
      >
        <Footer
          back={{
            route: "/quick-start",
            label: "Quick Start",
          }}
          forward={{
            route: "/main-concepts/queueing",
            label: "Queueing",
          }}
        />
      </Container>
    </Box>
  );
}
