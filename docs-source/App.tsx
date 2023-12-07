import React, { lazy, Suspense, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Outlet, useLocation } from "react-router-dom";
import { Routes, Route, useLoadingContext, topbar } from "react-router-loading";
import { primaryColor } from "./components/theme/theme";
import { useEffect } from "react";
import { SyncedStateProvider } from "../src";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Layers from "./Pages/MainConcepts/Layers";
import { Pages } from "./navigationData/pages";
import { AppThemeProvider } from "./components/theme/AppThemeProvider";
import AppContentLayout from "./components/layouts/AppContentLayout";

const Problem = lazy(() => import("./Pages/Problem"));
const QuickStart = lazy(() => import("./Pages/QuickStart"));
const MainConcepts = lazy(() => import("./Pages/MainConcepts"));
const Queueing = lazy(() => import("./Pages/MainConcepts/Queueing"));
const Priority = lazy(() => import("./Pages/MainConcepts/Priority"));
const Examples = lazy(() => import("./Pages/Examples"));
const NotificationManagement = lazy(() => import("./Pages/Examples/NotificationManagement"));

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
  { path: Pages.Problem.path, element: <Problem /> },
  { path: Pages.QuickStart.path, element: <QuickStart /> },
  { path: Pages.MainConcepts.Index.path, element: <MainConcepts /> },
  { path: Pages.MainConcepts.Queueing.path, element: <Queueing /> },
  { path: Pages.MainConcepts.Priority.path, element: <Priority /> },
  { path: Pages.MainConcepts.Layers.path, element: <Layers /> },
  { path: Pages.Examples.Index.path, element: <Examples /> },
  { path: Pages.Examples.NotificationManagement.path, element: <NotificationManagement /> },
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
  return (
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <SyncedStateProvider>
          <AppContentLayout>
            <Router />
          </AppContentLayout>
        </SyncedStateProvider>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
