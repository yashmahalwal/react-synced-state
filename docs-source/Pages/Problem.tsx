import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import UncontrolledModals, { SourceCode } from "../CodeSamples/UncontrolledModals";
import CodePreview from "../components/code/CodePreview";
import PageWithContent from "../components/layouts/PageWithContent";
import { Pages } from "../navigationData/pages";

export default function Problem() {
  const theme = useTheme();

  return (
    <PageWithContent
      title={"The Problem"}
      content={
        <>
          <Typography variant={"body1"}>
            React applications are made up of components and each component can have its own state. The component
            controls when and how its state is updated. Sometimes, a single event (such as successfully fetching some
            data or clicking on a button) can cause independent state updates across multiple components. We have no way
            of ordering or synchronising these state updates.
          </Typography>

          <section style={{ marginTop: theme.spacing(4) }}>
            <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h1"}>
              Why does it matter?
            </Typography>
            <article>
              <Typography variant={"body1"}>
                Components often use state updates to reflect UI changes. A very common use case is to show a popups by
                using a <code>boolean</code> state variable. What happens if an event causes multiple popups to open up
                together? Things can get pretty chaotic pretty fast. Too hard to visualise? Try clicking the button
                below.
              </Typography>
              <CodePreview sourceCode={SourceCode}>
                <UncontrolledModals />
              </CodePreview>
              <Typography variant={"body1"} gutterBottom>
                This is just one example. In a complex React application, it is pretty common to have certain side
                effects trigger state updates in a way that cannot be controlled. If there&apos;s no way to control the
                state updates (like in the example above), user experience is seriously degraded. In fact, in React
                Native, opening multiple modals at once can cause the app to freeze.
              </Typography>
              <Typography variant={"body1"} gutterBottom>
                One way to solve this is to control how these states are updated by some logic and make them update one
                by one. Trying to manage all such updates is not at all trivial. We need a synchronisation mechanism
                which lets us control which state update is fired when. This hook lets you do that with minimum
                configuration and maximum peace of mind.
              </Typography>
            </article>
          </section>
        </>
      }
      previousLink={Pages.Home}
      nextLink={Pages.QuickStart}
    />
  );
}
