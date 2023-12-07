import React, { FunctionComponent, ReactNode } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import Box from "@mui/material/Box";
import { NavigationEntry } from "../../navigationData/pages";

export interface FullPageProps {
  title?: string;
  content?: ReactNode;
  previousLink?: NavigationEntry;
  nextLink?: NavigationEntry;
}

const PageWithContent: FunctionComponent<FullPageProps> = ({ title, content, previousLink, nextLink }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      flex={1}
      minWidth={0}
      py={6}
      px={{
        md: 6,
        xs: 2,
      }}
    >
      <Container maxWidth={"xl"} sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box flex={1}>
          {!!title && (
            <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
              {title}
            </Typography>
          )}
          {content}
        </Box>
        <Box pt={6}>
          <Footer back={previousLink} forward={nextLink} />
        </Box>
      </Container>
    </Box>
  );
};

export default PageWithContent;
