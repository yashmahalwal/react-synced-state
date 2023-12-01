import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { NavigationEntry, Pages } from "../../navigationData/pages";
import List from "@mui/material/List";
import ListItemButton from "./ListItemLinkButton";
import { ListItemText } from "@mui/material";
import ModeChangeButtons from "../theme/ModeChangeButtons";

const drawerWidth = 250;

const links: NavigationEntry[] = [
  Pages.Home,
  Pages.Problem,
  Pages.QuickStart,
  Pages.MainConcepts.Index,
  Pages.MainConcepts.Queueing,
  Pages.MainConcepts.Priority,
  Pages.MainConcepts.Layers,
  Pages.Examples.Index,
  Pages.Examples.NotificationManagement,
];
const SidebarBase: FunctionComponent = () => {
  const drawer = (
    <Box>
      <ModeChangeButtons />
      <List component="nav" aria-label="Navigation Menu" sx={{ width: drawerWidth }}>
        {links.map((link) => (
          <ListItemButton key={link.label} to={link.path} sx={{ px: 4, py: 0.5 }}>
            <ListItemText primary={link.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={"permanent"}
      sx={{
        width: drawerWidth,
      }}
    >
      {drawer}
    </Drawer>
  );
};

const Sidebar = () => {
  return <SidebarBase />;
};

export default Sidebar;
