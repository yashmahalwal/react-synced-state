import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import React from "react";

export default function Examples() {
  return (
    <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"} position={"relative"} flexDirection={"column"}>
      <Container sx={{ padding: 6 }} maxWidth={"md"}>
        <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
          Advanced Examples
        </Typography>
        <section>
          <article>
            <Typography variant={"body1"} mb={3}>
              Let us now see some examples to see how to leverage the configuration options and control the updates as
              you&apos;d like them.
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
            route: "/main-concepts/layers",
            label: "Layers",
          }}
          forward={{
            route: "/examples/notification-management",
            label: "Notification Management",
          }}
        />
      </Container>
    </Box>
  );
}
