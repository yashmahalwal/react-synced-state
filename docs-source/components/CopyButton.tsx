import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";

const CopyButton: React.FunctionComponent<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = window.setTimeout(() => setCopied(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <Tooltip title={copied ? "Copied!" : "Copy code"}>
      <IconButton
        disabled={copied}
        onClick={async () => {
          await navigator.clipboard.writeText(content);
          setCopied(true);
        }}
        size={"small"}
      >
        {copied ? <CheckOutlined fontSize={"small"} color={"success"} /> : <ContentCopyRounded fontSize={"small"} />}
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
