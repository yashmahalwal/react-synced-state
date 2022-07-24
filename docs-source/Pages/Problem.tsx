import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import UncontrolledModals, { SourceCode } from "../CodeSamples/UncontrolledModals";
import CodePreview from "../components/CodePreview";
import ArrowForward from "@mui/icons-material/ArrowForward";
import LinkButton from "../components/LinkButton";
import { ArrowBack } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

export default function Problem() {
  const theme = useTheme();
  return (
    <Container sx={{ padding: 6 }} maxWidth={"lg"}>
      <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
        The Problem
      </Typography>
      <Typography variant={"body1"}>
        React applications are a hierarchy of components. Each component can have its own state and the component
        controls when and how its state is updated. Sometimes, a single event (such as successfully data fetching or
        clicking on a button) can cause state updates across multiple components. Since state is internal to every
        component, we have no direct way of synchronising state updates across components. In other words, we do not
        have control over the ordering of these state updates.
      </Typography>

      <section style={{ marginTop: theme.spacing(4) }}>
        <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h1"}>
          Why does it matter?
        </Typography>
        <article>
          <Typography variant={"body1"}>
            Components often use state to trigger UI changes. A very common use case is to show a modal by using a{" "}
            <code>boolean</code> state variable. Imagine if there are multiple modals in your app that are opened at
            once as a result of some activity. Too hard to visualise? Try clicking the button below.
          </Typography>
          <CodePreview sourceCode={SourceCode}>
            <UncontrolledModals />
          </CodePreview>
          <Typography variant={"body1"} gutterBottom>
            This is just one example. In a complex React/React Native application, it is pretty common to have certain
            side effects trigger state updates in a way that cannot be controlled. Trying to manage all such updates is
            not at all trivial. We need a synchronisation mechanism which lets us control which state update is fired
            when. This hook allows you to achieve this with minimum configuration and maximum peace of mind.
          </Typography>
        </article>
      </section>
      <footer style={{ marginTop: theme.spacing(12) }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <LinkButton
              sx={{
                marginTop: 2,
              }}
              variant={"outlined"}
              startIcon={<ArrowBack />}
              to={"/"}
            >
              Home
            </LinkButton>
          </Grid>
          <Grid item>
            <LinkButton
              sx={{
                marginTop: 2,
              }}
              variant={"outlined"}
              endIcon={<ArrowForward />}
              to={"/quick-start"}
            >
              Quick Start
            </LinkButton>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
}
