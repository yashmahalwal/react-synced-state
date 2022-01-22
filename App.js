import * as React from "./_snowpack/pkg/react.js";
import useMediaQuery from "./_snowpack/pkg/@mui/material/useMediaQuery.js";
import {createTheme, ThemeProvider} from "./_snowpack/pkg/@mui/material/styles.js";
import CssBaseline from "./_snowpack/pkg/@mui/material/CssBaseline.js";
import {BrowserRouter, Route, Routes} from "./_snowpack/pkg/react-router-dom.js";
import Home from "./Pages/Home.js";
import {themeOptions} from "./components/theme.js";
import {useEffect, useState} from "./_snowpack/pkg/react.js";
import Problem from "./Pages/Problem.js";
export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
  const theme = React.useMemo(() => createTheme({
    ...themeOptions,
    palette: {
      ...themeOptions.palette,
      mode: darkMode ? "dark" : "light"
    }
  }), [darkMode]);
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/problem",
    element: /* @__PURE__ */ React.createElement(Problem, null)
  }))));
}
