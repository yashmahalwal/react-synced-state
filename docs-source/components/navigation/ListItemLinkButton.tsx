import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import ListItemButton, { ListItemButtonProps } from "@mui/material/ListItemButton";

const LinkButton: React.FC<ListItemButtonProps<typeof RouterLink, LinkProps> & Pick<LinkProps, "to">> = ({
  ...props
}) => {
  return <ListItemButton role={"link"} component={RouterLink} {...props} />;
};

export default LinkButton;
