import React, { FunctionComponent, ReactNode, useContext } from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { AppThemeContext, AppThemeMode } from "./AppThemeProvider";
import Box from "@mui/material/Box";
import { DarkMode, LightMode, SettingsBrightness } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const modes: AppThemeMode[] = ["light", "system", "dark"];
const icons: Record<AppThemeMode, ReactNode> = {
  light: <LightMode />,
  dark: <DarkMode />,
  system: <SettingsBrightness />,
};
const ModeChangeButtons: FunctionComponent = () => {
  const { mode, setMode } = useContext(AppThemeContext);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant={"overline"}>Theme Mode</Typography>
      <ButtonGroup
        size={"small"}
        variant="contained"
        aria-label="outlined primary button group"
        disableElevation={true}
      >
        {modes.map((option) => (
          <Button disabled={mode === option} onClick={() => setMode(option)} key={option} startIcon={icons[option]}>
            {option.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ModeChangeButtons;
