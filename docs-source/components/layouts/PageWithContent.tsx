import React, { FunctionComponent, ReactNode } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import Box from "@mui/material/Box";
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
    <Box minHeight={"100%"} display={"flex"}>
      <Box flex={0}>
        <Sidebar />
      </Box>
      <Box display={"flex"} flexDirection={"column"} flex={1} minWidth={0} padding={6}>
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
    </Box>
  );
};

export default PageWithContent;
