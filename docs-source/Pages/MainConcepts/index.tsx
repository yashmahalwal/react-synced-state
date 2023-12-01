import React from "react";
import FullPage from "../../components/layouts/FullPage";
import { Pages } from "../../navigationData/pages";

export default function MainConcepts() {
  return (
    <FullPage
      title={"Main Concepts"}
      subtitle={`Now that we have seen the hook in action, let us try to understand how everything works and how to use this hook to manage states as per your will. We look at the basic principle and them move on to advance usage and customisations.`}
      previousLink={Pages.QuickStart}
      nextLink={Pages.MainConcepts.Queueing}
    />
  );
}
