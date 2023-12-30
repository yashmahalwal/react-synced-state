import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ControlledModals, { SourceCode } from "../CodeSamples/ControlledModals";
import CodePreview from "../components/code/CodePreview";
import CodeSnippet from "../components/code/CodeSnippet";
import { Pages } from "../navigationData/pages";
import PageWithContent from "../components/layouts/PageWithContent";

const steps = [
  {
    label: <>Install the package in your app. It only has one (peer) dependency - React.</>,
    code: "npm i @yashmahalwal/react-synced-state",
  },
  {
    label: (
      <>
        Import and add <code>SyncedStateProvider</code> at the top of your app
      </>
    ),
    code: `// App.jsx
import {SyncedQueueProvider} from 'react-synced-state';

function App(){
  return <SyncedQueueProvider>
     ...
  </SyncedQueueProvider>
}`,
  },
  {
    label: (
      <>
        Replace <code>useState</code> with <code>useSyncedState</code>
      </>
    ),
    code: `// Component.jsx
import {useSyncedState} from 'react-synced-state';

function Component(){
  const [open, setOpen] = useSyncedState(false);
  
  return ...
}`,
  },
];

export default function QuickStart() {
  const theme = useTheme();

  return (
    <PageWithContent
      title={"Quick Start"}
      content={
        <section>
          <article>
            <Typography variant={"body1"}>
              Using this utility is pretty straightforward. Here&apos;s what you need to do:
            </Typography>
            <ol style={{ margin: theme.spacing(1, 0, 0, 0) }}>
              {steps.map(({ code, label }, index) => (
                <li key={index} style={{ paddingTop: theme.spacing(2) }}>
                  {label}
                  <CodeSnippet
                    customStyle={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: theme.palette.grey[400],
                      borderRadius: theme.spacing(1),
                      marginTop: theme.spacing(1),
                    }}
                  >
                    {code}
                  </CodeSnippet>
                </li>
              ))}
            </ol>
            <Typography marginTop={4} variant={"body1"} gutterBottom>
              That&apos;s it! All the popups will open one by one now. Try it out by clicking the button below:
            </Typography>
            <CodePreview sourceCode={SourceCode}>
              <ControlledModals />
            </CodePreview>
            <Typography variant={"body1"} component={"p"} gutterBottom>
              Now that we&apos;ve seen everything in action, it is time to understand what is happening here. This is a
              powerful utility that ensures your app is always in harmony, yet it is simple enough to not make anything
              magical.
            </Typography>
          </article>
        </section>
      }
      previousLink={Pages.Problem}
      nextLink={Pages.MainConcepts.Index}
    />
  );
}
