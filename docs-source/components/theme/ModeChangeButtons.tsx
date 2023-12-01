import React, { FunctionComponent, useContext } from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { AppThemeContext, AppThemeMode } from "./AppThemeProvider";
import Box from "@mui/material/Box";

const modes: AppThemeMode[] = ["light", "system", "dark"];
const ModeChangeButtons: FunctionComponent = () => {
  const { mode, setMode } = useContext(AppThemeContext);

  return (
    <Box>
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        {modes.map((option) => (
          <Button disabled={mode === option} onClick={() => setMode(option)} key={option}>
            {option.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ModeChangeButtons;
