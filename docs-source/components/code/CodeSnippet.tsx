import React, { PropsWithChildren } from "react";
import { PrismAsyncLight as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@mui/material/styles";

type Props = PropsWithChildren<SyntaxHighlighterProps>;

const CodeSnippet: React.FunctionComponent<Props> = ({ children, customStyle, ...rest }) => {
  const { palette } = useTheme();
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: "13px !important", margin: 0, border: "none", ...customStyle }}
      language={"typescript"}
      style={palette.mode === "dark" ? vscDarkPlus : vs}
      {...rest}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
