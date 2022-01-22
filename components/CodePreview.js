import React, {useState} from "../_snowpack/pkg/react.js";
import Collapse from "../_snowpack/pkg/@mui/material/Collapse.js";
import Card from "../_snowpack/pkg/@mui/material/Card.js";
import CardContent from "../_snowpack/pkg/@mui/material/CardContent.js";
import "../_snowpack/pkg/microlight.js";
import {useTheme} from "../_snowpack/pkg/@mui/material/styles.js";
import Box from "../_snowpack/pkg/@mui/material/Box/Box.js";
import IconButton from "../_snowpack/pkg/@mui/material/IconButton/IconButton.js";
import {Code, CodeOff} from "../_snowpack/pkg/@mui/icons-material.js";
import CardHeader from "../_snowpack/pkg/@mui/material/CardHeader/CardHeader.js";
export default function CodePreview({sourceCode, children}) {
  const [showCode, setShowCode] = useState(false);
  const {palette, spacing} = useTheme();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      margin: spacing(4, 0)
    }
  }, /* @__PURE__ */ React.createElement(Card, {
    sx: {
      marginTop: 2,
      boxShadow: "none",
      border: 1,
      borderColor: "primary.main",
      borderBottomLeftRadius: showCode ? 0 : void 0,
      borderBottomRightRadius: showCode ? 0 : void 0
    }
  }, /* @__PURE__ */ React.createElement(CardHeader, {
    action: /* @__PURE__ */ React.createElement(IconButton, {
      onClick: () => setShowCode((s) => !s)
    }, !showCode ? /* @__PURE__ */ React.createElement(Code, null) : /* @__PURE__ */ React.createElement(CodeOff, null))
  }), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 150
  }, children))), /* @__PURE__ */ React.createElement(Collapse, {
    in: showCode
  }, /* @__PURE__ */ React.createElement(Box, {
    maxHeight: 300,
    overflow: "auto",
    border: 1,
    borderColor: "primary.main",
    padding: 2,
    borderTop: 0
  }, /* @__PURE__ */ React.createElement("code", {
    className: "microlight",
    style: {
      fontSize: 12,
      fontFamily: "monospace",
      whiteSpace: "pre",
      color: palette.primary.light,
      userSelect: "initial"
    }
  }, /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement(Collapse, {
    in: true
  }, sourceCode))))));
}
