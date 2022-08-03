import { ThemeOptions } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export const primaryColor = deepOrange[700];

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: primaryColor,
    },
  },
};
