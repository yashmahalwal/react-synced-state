import useTheme from "@mui/material/styles/useTheme";
import React from "react";

interface Props {
  code: string;
}

export default function SnippetBlock({ code }: Props) {
  const { palette, spacing } = useTheme();
  return (
    <div
      style={{
        fontSize: 12,
        borderRadius: 6,
        backgroundColor: palette.mode === "dark" ? "grey" : "lightgray",
        padding: spacing(1, 2),
      }}
    >
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
