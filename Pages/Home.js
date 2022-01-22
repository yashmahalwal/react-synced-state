import Container from "../_snowpack/pkg/@mui/material/Container.js";
import Typography from "../_snowpack/pkg/@mui/material/Typography.js";
import React from "../_snowpack/pkg/react.js";
import {styled} from "../_snowpack/pkg/@mui/material/styles.js";
import ArrowForward from "../_snowpack/pkg/@mui/icons-material/ArrowForward.js";
import LinkButton from "../components/LinkButton.js";
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  user-select: none;
`;
export default function Home() {
  return /* @__PURE__ */ React.createElement(StyledContainer, {
    maxWidth: "md"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h1",
    gutterBottom: true
  }, "React Synced State"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    component: "p",
    gutterBottom: true
  }, "A simple utility to synchronise state updates across your React app."), /* @__PURE__ */ React.createElement(LinkButton, {
    size: "large",
    sx: {
      marginTop: 2
    },
    variant: "contained",
    endIcon: /* @__PURE__ */ React.createElement(ArrowForward, null),
    to: "/problem"
  }, "Get Started")));
}
