import React from "react";
import { Pages } from "../../navigationData/pages";
import FullPage from "../../components/layouts/FullPage";

export default function Examples() {
  return (
    <FullPage
      title={"Advanced Examples"}
      subtitle={`Let us now see some examples to see how to leverage the configuration options and control the updates as you'd like them.`}
      previousLink={Pages.MainConcepts.Layers}
      nextLink={Pages.Examples.NotificationManagement}
    />
  );
}
