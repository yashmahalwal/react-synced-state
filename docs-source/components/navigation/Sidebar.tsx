import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { Pages } from "../../navigationData/pages";
import ModeChangeButtons from "../theme/ModeChangeButtons";
import { RecursiveNavigationEntry, SidebarNavigationList } from "./SidebarNavigationList";
import SidebarLogo from "./SidebarLogo";
import { useIsOnHome } from "../../hooks/useIsOnHome";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, Menu } from "@mui/icons-material";

const drawerWidth = 300;

const links: RecursiveNavigationEntry[] = [
  Pages.Home,
  Pages.Problem,
  Pages.QuickStart,
  {
    header: Pages.MainConcepts.Index,
    entries: [Pages.MainConcepts.Queueing, Pages.MainConcepts.Priority, Pages.MainConcepts.Layers],
  },
  { header: Pages.Examples.Index, entries: [Pages.Examples.NotificationManagement] },
];

const SidebarContent = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <SidebarLogo />
      <Box component="nav" aria-label="Navigation Menu" sx={{ width: drawerWidth }} flex={1}>
        <SidebarNavigationList items={links} />
      </Box>
      <Box flex={0} display={"flex"} justifyContent={"center"} py={2}>
        <ModeChangeButtons />
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  const [temporaryDrawerOpen, setTemporaryDrawerOpen] = useState(false);
  const isOnHomePage = useIsOnHome();
  const theme = useTheme();
  const isOnSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const styles: DrawerProps["sx"] = {
    width: drawerWidth,
    "& .MuiDrawer-paper": { bottom: 0 },
  };

  const content = <SidebarContent />;

  const handleClose = () => setTemporaryDrawerOpen(false);
  const handleOpen = () => setTemporaryDrawerOpen(true);
  const shouldShowTemporaryDrawer = isOnHomePage || isOnSmallScreen;

  if (shouldShowTemporaryDrawer) {
    return (
      <>
        <IconButton
          aria-label="Close sidebar"
          onClick={handleOpen}
          size={"small"}
          sx={{ position: "fixed", top: theme.spacing(1.5), left: theme.spacing(1.5), zIndex: theme.zIndex.drawer }}
        >
          <Menu />
        </IconButton>
        <Drawer variant={"temporary"} sx={styles} open={temporaryDrawerOpen} onClose={handleClose}>
          <Box display={{ xs: "flex", sm: "none" }} justifyContent={"center"} py={1}>
            <IconButton onClick={handleClose} size={"small"}>
              <ArrowBack />
            </IconButton>
          </Box>
          {content}
        </Drawer>
      </>
    );
  }

  return (
    <Drawer variant={"permanent"} sx={styles}>
      {content}
    </Drawer>
  );
};

export default Sidebar;
