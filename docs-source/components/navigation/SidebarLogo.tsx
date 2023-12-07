import React, { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SidebarLogo: FunctionComponent = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      py={{
        sm: 4,
        xs: 1,
      }}
    >
      <Typography variant={"h5"} component={"p"} sx={{ userSelect: "none" }}>
        React Synced State
      </Typography>
    </Box>
  );
};

export default SidebarLogo;
