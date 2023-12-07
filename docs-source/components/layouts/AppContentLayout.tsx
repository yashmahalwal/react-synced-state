import React, { FunctionComponent, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../navigation/Sidebar";

const AppContentLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Box minHeight={"100%"} display={"flex"}>
      <Box flex={0}>
        <Sidebar />
      </Box>
      <Box
        flex={1}
        minWidth={0}
        sx={{
          "& > div": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppContentLayout;
