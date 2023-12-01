import React, { FunctionComponent, ReactNode } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import Box from "@mui/material/Box/Box";
import { NavigationEntry } from "../../navigationData/pages";
import Sidebar from "../navigation/Sidebar";

export interface FullPageProps {
  title?: string;
  content?: ReactNode;
  previousLink?: NavigationEntry;
  nextLink?: NavigationEntry;
}

const PageWithContent: FunctionComponent<FullPageProps> = ({ title, content, previousLink, nextLink }) => {
  return (
    <Box height={"100%"} display={"flex"}>
      <Box flex={0}>
        <Sidebar />
      </Box>
      <Box height={"100%"} display={"flex"} flexDirection={"column"} flex={1} minWidth={0} padding={6}>
        <Container maxWidth={"lg"} sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box flex={1}>
            {!!title && (
              <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
                {title}
              </Typography>
            )}
            {content}
          </Box>
          <Footer back={previousLink} forward={nextLink} />
        </Container>
      </Box>
    </Box>
  );
};

export default PageWithContent;
