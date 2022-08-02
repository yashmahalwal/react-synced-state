import React, { FunctionComponent, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LinkButton from "./LinkButton";
import { ArrowBack } from "@mui/icons-material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

interface ButtonInfo {
  route: LinkProps["to"];
  label: ReactNode;
}
interface FooterProps {
  back: ButtonInfo;
  forward: ButtonInfo;
}

const Footer: FunctionComponent<FooterProps> = ({ forward, back }) => {
  const theme = useTheme();
  return (
    <footer style={{ marginTop: theme.spacing(6) }}>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <LinkButton variant={"text"} startIcon={<ArrowBack />} to={back.route}>
            {back.label}
          </LinkButton>
        </Grid>
        <Grid item>
          <LinkButton variant={"text"} endIcon={<ArrowForward />} to={forward.route}>
            {forward.label}
          </LinkButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
