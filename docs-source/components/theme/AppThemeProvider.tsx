import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PaletteMode } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";

export type AppThemeMode = PaletteMode | "system";

export type AppThemeContext = {
  mode: AppThemeMode;
  setMode: Dispatch<SetStateAction<AppThemeMode>>;
};

export const AppThemeContext = createContext<AppThemeContext>({
  mode: "system",
  setMode() {
    // Empty
  },
});

const themeKey = "react-synced-state:theme:mode";
const saveMode = (mode: AppThemeMode) => localStorage.setItem(themeKey, mode);
const getMode = () => (localStorage.getItem(themeKey) || "system") as AppThemeMode;

export function AppThemeProvider({ children }: PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<AppThemeMode>(getMode);

  const onUnMount = () => saveMode(mode);
  const onUnMountRef = useRef(onUnMount);
  onUnMountRef.current = onUnMount;

  useEffect(() => {
    return onUnMountRef.current;
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          mode: mode === "dark" || (mode === "system" && prefersDarkMode) ? "dark" : "light",
        },
      }),
    [mode, prefersDarkMode]
  );

  const contextValues = useMemo(() => ({ mode, setMode }), [mode]);

  return (
    <AppThemeContext.Provider value={contextValues}>
      <>
        <style>
          {`
        :not(pre) > code{
          background-color: ${theme.palette.mode === "dark" ? "#424242" : "#efefef"};
        }
        
        html, body, body > main, body> main > style + div{
          height: 100%
        }
        `}
        </style>
      </>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}
