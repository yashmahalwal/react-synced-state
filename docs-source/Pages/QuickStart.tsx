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

export default function QuickStart() {
  const theme = useTheme();
  return (
    <Container sx={{ padding: 6 }} maxWidth={"lg"}>
      <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
        Quick Start
      </Typography>
      <section>
        <article>
          <Typography variant={"body1"} color={"textSecondary"}>
            Using this utility is pretty straightforward. Here&apos;s what you need to do:
          </Typography>
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
          <Typography variant={"body1"} color={"textSecondary"} component={"p"} gutterBottom>
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
