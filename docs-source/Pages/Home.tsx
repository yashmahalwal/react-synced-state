import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForward from "@mui/icons-material/ArrowForward";
import LinkButton from "../components/LinkButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CopyButton from "../components/CopyButton";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <StyledContainer maxWidth={"md"}>
      <div>
        <Typography variant="h1" gutterBottom>
          React Synced State
        </Typography>
        <Typography variant={"h4"} component={"p"} gutterBottom>
          A simple utility to synchronise state updates across your React app.
        </Typography>
        <Grid container spacing={2} alignItems={"center"} marginTop={2}>
          <Grid item>
            <LinkButton size={"large"} variant={"contained"} endIcon={<ArrowForward />} to={"/problem"}>
              Get Started
            </LinkButton>
          </Grid>
          <Grid item>
            <Box
              p={"5px"}
              border={1}
              borderRadius={1}
              display={"flex"}
              alignItems={"center"}
              borderColor={"primary.main"}
            >
              <Typography color={"textSecondary"} marginLeft={1} fontWeight={600}>
                <code>$ npm i react-synced-state&nbsp;</code>
              </Typography>
              <CopyButton content={"npm i react-synced-state"} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </StyledContainer>
  );
}
