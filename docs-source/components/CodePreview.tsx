import React, { PropsWithChildren, useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import { Code, CodeOff, InfoOutlined } from "@mui/icons-material";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

import CopyButton from "./CopyButton";

interface Props {
  sourceCode: string;
}

export default function CodePreview({ sourceCode, children }: PropsWithChildren<Props>) {
  const [showCode, setShowCode] = useState(false);
  const { palette, spacing } = useTheme();
  const [code, setCode] = useState("");

  useEffect(() => {
    try {
      const code = window.atob(sourceCode);
      console.log(code);
      setCode(code);
    } catch {
      // Fail silently
    }
  }, [sourceCode]);

  return (
    <div
      style={{
        margin: spacing(4, 0),
      }}
    >
      <Card
        sx={{
          marginTop: 2,
          boxShadow: "none",
          border: 1,
          borderColor: "primary.main",
          borderBottomLeftRadius: showCode ? 0 : undefined,
          borderBottomRightRadius: showCode ? 0 : undefined,
        }}
      >
        <CardHeader
          action={
            <>
              <Tooltip title={`${showCode ? "Hide" : "See"} source code`}>
                <IconButton size={"small"} onClick={() => setShowCode((s) => !s)}>
                  {!showCode ? <Code fontSize={"small"} /> : <CodeOff fontSize={"small"} />}
                </IconButton>
              </Tooltip>
              <CopyButton content={code} />
              <Tooltip title={<>The examples are powered by Material UI</>}>
                <IconButton onClick={() => window.open("https://mui.com/", "_blank")} size={"small"}>
                  <InfoOutlined fontSize={"small"} />
                </IconButton>
              </Tooltip>
            </>
          }
        />
        <CardContent>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={150}>
            {children}
          </Box>
        </CardContent>
      </Card>
      <Collapse in={showCode}>
        <Box
          position={"relative"}
          maxHeight={300}
          overflow={"auto"}
          border={1}
          borderColor={"primary.main"}
          borderTop={0}
        >
          {
            <SyntaxHighlighter
              customStyle={{ fontSize: "13px !important", margin: 0 }}
              key={sourceCode}
              language={"typescript"}
              style={palette.mode === "dark" ? vscDarkPlus : vs}
            >
              {code}
            </SyntaxHighlighter>
          }
        </Box>
      </Collapse>
    </div>
  );
}
