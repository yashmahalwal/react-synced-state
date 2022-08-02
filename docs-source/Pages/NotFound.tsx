import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider";

export default function NotFound() {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant={"h4"}>404</Typography>
        <Divider orientation={"vertical"} flexItem sx={{ margin: (theme) => theme.spacing(0, 2) }} />
        <Typography component={"h1"}>The page you&apos;re looking for does not exist</Typography>
      </Box>
    </Box>
  );
}
