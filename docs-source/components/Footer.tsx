import React, { FunctionComponent, useMemo } from "react";
import Grid from "@mui/material/Grid";
import LinkButton from "./navigation/LinkButton";
import { ArrowBack } from "@mui/icons-material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { NavigationEntry } from "../navigationData/pages";

export interface FooterProps {
  back?: NavigationEntry;
  forward?: NavigationEntry;
}

const Footer: FunctionComponent<FooterProps> = ({ forward, back }) => {
  const justifyContent = useMemo(() => {
    if (forward && back) {
      return "space-between";
    }
    if (forward) {
      return "flex-end";
    }

    return "flex-start";
  }, [back, forward]);

  return (
    <footer>
      <Grid container justifyContent={justifyContent}>
        {!!back && (
          <Grid item>
            <LinkButton variant={"text"} startIcon={<ArrowBack />} to={back.path}>
              {back.label}
            </LinkButton>
          </Grid>
        )}
        {!!forward && (
          <Grid item>
            <LinkButton variant={"text"} endIcon={<ArrowForward />} to={forward.path}>
              {forward.label}
            </LinkButton>
          </Grid>
        )}
      </Grid>
    </footer>
  );
};

export default Footer;
