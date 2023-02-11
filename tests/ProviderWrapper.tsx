import React, { FunctionComponent, PropsWithChildren } from "react";
import { SyncedStateProvider } from "../src";

export const ProviderWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <SyncedStateProvider>{children}</SyncedStateProvider>;
};
