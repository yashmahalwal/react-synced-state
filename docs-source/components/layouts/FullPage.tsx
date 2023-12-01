import React, { FunctionComponent } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import Box from "@mui/material/Box/Box";
import { NavigationEntry } from "../../navigationData/pages";
import Sidebar from "../navigation/Sidebar";

export interface FullPageProps {
  title?: string;
  subtitle?: string;
  previousLink?: NavigationEntry;
  nextLink?: NavigationEntry;
}

const FullPage: FunctionComponent<FullPageProps> = ({ title, subtitle, previousLink, nextLink }) => {
  return (
    <Box minHeight={"100%"} display={"flex"}>
      <Box flex={0}>
        <Sidebar />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        flexDirection={"column"}
        padding={6}
        flex={1}
      >
        <Box flex={1} justifyContent={"center"} alignItems={"center"} display={"flex"}>
          <Container maxWidth={"md"}>
            {!!title && (
              <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
                {title}
              </Typography>
            )}
            {!!subtitle && (
              <section>
                <article>
                  <Typography variant={"body1"} mb={3}>
                    {subtitle}
                  </Typography>
                </article>
              </section>
            )}
          </Container>
        </Box>
        <Container maxWidth={"xl"} sx={{ position: "absolute", left: 0, bottom: 0, right: 0, py: 6 }}>
          <Footer back={previousLink} forward={nextLink} />
        </Container>
      </Box>
    </Box>
  );
};

export default FullPage;
