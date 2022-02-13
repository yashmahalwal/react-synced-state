import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import Button, { ButtonProps } from "@mui/material/Button";

const LinkButton: React.FC<ButtonProps<typeof RouterLink, LinkProps> & Pick<LinkProps, "to">> = ({ ...props }) => {
  return <Button role={"link"} component={RouterLink} {...props} />;
};

export default LinkButton;
