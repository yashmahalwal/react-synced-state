import React from "react";
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from "react-router-dom";
import { Link, LinkProps } from "@mui/material";

const RouterLink: React.FC<
  LinkProps<typeof ReactRouterLink, ReactRouterLinkProps> & Pick<ReactRouterLinkProps, "to">
> = ({ ...props }) => {
  return <Link role={"link"} {...props} />;
};

export default RouterLink;
