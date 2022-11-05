import React, { lazy, Suspense, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Outlet, useLocation } from "react-router-dom";
import { Routes, Route, useLoadingContext, topbar } from "react-router-loading";
import { primaryColor, themeOptions } from "./components/theme";
import { useEffect, useState } from "react";
import { SyncedStateProvider } from "../src";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
const Problem = lazy(() => import("./Pages/Problem"));
const QuickStart = lazy(() => import("./Pages/QuickStart"));
const MainConcepts = lazy(() => import("./Pages/MainConcepts"));
const Queueing = lazy(() => import("./Pages/MainConcepts/Queueing"));
const Priority = lazy(() => import("./Pages/MainConcepts/Priority"));

topbar.config({
  barThickness: 2,
  barColors: {
    0: primaryColor,
    1: primaryColor,
  },
});

function Loader() {
  const { done } = useLoadingContext();
  useEffect(() => {
    done();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

function SuspenseWrapper() {
  const { pathname } = useLocation();
  return (
    <Suspense fallback={null}>
      <Loader key={pathname} />
      <Outlet />
    </Suspense>
  );
}

const paths: (({ path: string } | { index: true }) & { element: React.ReactNode })[] = [
  { index: true, element: <Home /> },
  { path: "/problem", element: <Problem /> },
  { path: "/quick-start", element: <QuickStart /> },
  { path: "/main-concepts", element: <MainConcepts /> },
  { path: "/main-concepts/queueing", element: <Queueing /> },
  { path: "/main-concepts/priority", element: <Priority /> },
];

function Router() {
  const { pathname } = useLocation();

  const cache = useRef(new Set<string>());
  useEffect(() => {
    cache.current.add(pathname);
  }, [pathname]);

  return (
    <Routes>
      <Route path={"/"} element={<SuspenseWrapper />}>
        {paths.map((props) => (
          <Route {...props} key={"path" in props ? props.path : "index-path"} loading />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
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
            <Router />
          </SyncedStateProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
