import { NavigationEntry } from "../../navigationData/pages";
import { useIsOnUrl } from "../../hooks/useIsOnUrl";
import ListItemButton from "./ListItemLinkButton";
import { ListItemText, ListItemButton as MuiListItemButton } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import React from "react";

export type RecursiveNavigationEntry =
  | NavigationEntry
  | { header: NavigationEntry; entries: RecursiveNavigationEntry[] };

const isNavigationEntry = (o: RecursiveNavigationEntry): o is NavigationEntry => "path" in o && "label" in o;

type SidebarNavigationEntryListItemProps = {
  item: NavigationEntry;
} & Pick<SidebarNavigationListItemProps, "level">;

const SidebarNavigationEntryListItem = ({ item, level = 1 }: SidebarNavigationEntryListItemProps) => {
  const isActive = useIsOnUrl(item.path);

  const children = <ListItemText primary={item.label} />;

  if (item.nativeNavigation) {
    return (
      <MuiListItemButton
        selected={isActive}
        disableRipple
        key={item.label}
        href={item.path}
        target={"_blank"}
        component={"a"}
        dense={true}
        sx={{ pl: (level - 1) * 2 + 2, pr: 2 }}
      >
        {children}
      </MuiListItemButton>
    );
  }

  return (
    <ListItemButton
      selected={isActive}
      disableRipple
      key={item.label}
      to={item.path}
      dense={true}
      sx={{ pl: (level - 1) * 2 + 2, pr: 2 }}
    >
      {children}
    </ListItemButton>
  );
};

type SidebarNavigationListItemProps = {
  item: RecursiveNavigationEntry;
  level?: number;
};

const SidebarNavigationListItem = ({ item, level = 1 }: SidebarNavigationListItemProps) => {
  if (isNavigationEntry(item)) {
    return <SidebarNavigationEntryListItem item={item} level={level} />;
  }

  return (
    <Box>
      <SidebarNavigationEntryListItem item={item.header} level={level} />
      <SidebarNavigationList items={item.entries} level={level + 1} />
    </Box>
  );
};

type SidebarNavigationListProps = {
  items: RecursiveNavigationEntry[];
} & Pick<SidebarNavigationListItemProps, "level">;

export const SidebarNavigationList = ({ items, level = 1 }: SidebarNavigationListProps) => {
  return (
    <List sx={{ py: 0 }}>
      {items.map((item, index) => (
        <SidebarNavigationListItem item={item} key={index} level={level} />
      ))}
    </List>
  );
};
