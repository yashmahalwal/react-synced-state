import Container from "../_snowpack/pkg/@mui/material/Container.js";
import Typography from "../_snowpack/pkg/@mui/material/Typography.js";
import React from "../_snowpack/pkg/react.js";
import {useTheme} from "../_snowpack/pkg/@mui/material/styles.js";
import UncontrolledModals, {SourceCode} from "../CodeSamples/UncontrolledModals/index.js";
import CodePreview from "../components/CodePreview.js";
export default function Problem() {
  const theme = useTheme();
  return /* @__PURE__ */ React.createElement(Container, {
    sx: {padding: 6},
    maxWidth: "lg"
  }, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h4",
    fontWeight: "bold",
    component: "h1"
  }, "The Problem"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1",
    color: "textSecondary",
    component: "p"
  }, "React applications are a hierarchy of components. Each component can have its own state and the component controls when and how its state is updated. Since state is internal to every component, we have no direct way of synchronising state updates across components."), /* @__PURE__ */ React.createElement("section", {
    style: {marginTop: theme.spacing(4)}
  }, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h5",
    fontWeight: "bold",
    component: "h1"
  }, "Why does it matter?"), /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1",
    color: "textSecondary",
    component: "p"
  }, "Components often use state to trigger UI changes. A very common use case is to show a modal by using a boolean state variable. Imagine if there are multiple modals in your app that are opened at once as a result of some activity. Too hard to visualise? Try clicking the button below."), /* @__PURE__ */ React.createElement(CodePreview, {
    sourceCode: SourceCode
  }, /* @__PURE__ */ React.createElement(UncontrolledModals, null)), /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1",
    color: "textSecondary",
    component: "p",
    gutterBottom: true
  }, "This is just one example. In a complex React/React-Native application, it is pretty common to have certain side effects trigger state updates in a way that cannot be controlled. Trying to manage all such updates is not at all trivial."))));
}
