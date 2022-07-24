import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ControlledModals, { SourceCode } from "../CodeSamples/ControlledModals";
import CodePreview from "../components/CodePreview";
import ArrowForward from "@mui/icons-material/ArrowForward";
import LinkButton from "../components/LinkButton";
import Grid from "@mui/material/Grid";
import { ArrowBack } from "@mui/icons-material";
import SnippetBlock from "../components/SnippetBlock";

const appCode = `// App.jsx
import {SyncedQueueProvider} from \'react-synced-state\';

function App(){
  return < SyncedQueueProvider>
     ...
  </SyncedQueueProvider>
}`;

const hookCode = `// Component.jsx
import {useSyncedState} from \'react-synced-state\';

function Component(){
  const [open, setOpen] = useSyncedState(false);
  
  return ...
}
`;

export default function MainConcepts() {
  const theme = useTheme();
  return (
    <Container sx={{ padding: 6 }} maxWidth={"lg"}>
      <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
        Main Concepts
      </Typography>
      <section>
        <article>
          <Typography variant={"body1"} mb={3}>
            Now that we have seen the hook in action, let us try to understand how everything works and how to use this
            hook to manage states as per your will. We look at the basic principle and them move on to advance usage and
            customisations.
          </Typography>

          <section>
            <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h2"}>
              Synchronisation logic
            </Typography>
            <Typography variant={"body1"} mb={3}>
              There might be multiple state updates firing off in your app. You can align all of these updates using
              this hook. Here, we describe the basic synchronisation logic with the default behaviour. This can be
              further tuned and customised using parameters:
              <ol>
                <li style={{ margin: theme.spacing(2, 0) }}>
                  Naturally, we need a global point where we collect information about all the state updates. That point
                  is provided by <code>SyncedStateProvider</code> and it is called{" "}
                  <em>
                    <strong>layer</strong>
                  </em>
                  . To synchronise different groups of state updates, we can have mutliple independent layers
                </li>
                <li style={{ margin: theme.spacing(2, 0) }}>
                  Now we need to connect our components to the layer. Wherever <code>useSyncedState</code> hooks is
                  used, an entry point is created. This entry point connects to the global layer. This hook maintains a
                  state variable like <code>useState</code> hook.
                </li>
                <li style={{ margin: theme.spacing(2, 0) }}>
                  Layer maintains a queue of all the entry points. Whenever a state update is made via{" "}
                  <code>useSyncedState</code> hook, we check if this
                </li>
              </ol>
            </Typography>
          </section>
          <ul>
            <li>
              Import and add <code>SyncedStateProvider</code> at the top of your app
              <SnippetBlock code={appCode} />
            </li>
            <li
              style={{
                marginTop: theme.spacing(1),
              }}
            >
              Replace <code>useState</code> with <code>useSyncedState</code>
              <SnippetBlock code={hookCode} />
            </li>
          </ul>
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
      <footer style={{ marginTop: theme.spacing(4) }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <LinkButton
              sx={{
                marginTop: 2,
              }}
              variant={"outlined"}
              startIcon={<ArrowBack />}
              to={"/problem"}
            >
              The Problem
            </LinkButton>
          </Grid>
          <Grid item>
            <LinkButton
              sx={{
                marginTop: 2,
              }}
              variant={"outlined"}
              endIcon={<ArrowForward />}
              to={"/"}
            >
              Main Concepts
            </LinkButton>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
}
