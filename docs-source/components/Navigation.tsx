import React, { useState } from "react";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box/Box";

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Drawer variant={"permanent"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box minWidth={300}>
          <List>
            <ListItemButton>Home</ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
