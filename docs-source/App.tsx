import React, { lazy, Suspense } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { themeOptions } from "./components/theme";
import { useEffect, useState } from "react";
import { SyncedStateProvider } from "../src";
import NotFound from "./Pages/NotFound";

const Home = lazy(() => import("./Pages/Home"));
const Problem = lazy(() => import("./Pages/Problem"));
const QuickStart = lazy(() => import("./Pages/QuickStart"));
const MainConcepts = lazy(() => import("./Pages/MainConcepts"));
const Queueing = lazy(() => import("./Pages/MainConcepts/Queueing"));

function BaseApp() {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
}

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <>
      <style>
        {`:not(pre) > code{
          background-color: ${theme.palette.mode === "dark" ? "#424242" : "#efefef"};
        }`}
      </style>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <SyncedStateProvider>
            <Routes>
              <Route path={"/"} element={<BaseApp />}>
                <Route index element={<Home />} />
                <Route path="/problem" element={<Problem />} />
                <Route path="/quick-start" element={<QuickStart />} />
                <Route path="/main-concepts" element={<MainConcepts />} />
                <Route path="/main-concepts/queueing" element={<Queueing />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </SyncedStateProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
