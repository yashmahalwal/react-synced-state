import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CodePreview from "../../components/code/CodePreview";
import CodeSnippet from "../../components/code/CodeSnippet";
import LayersDemo, { SourceCode } from "../../CodeSamples/LayersDemo";
import PageWithContent from "../../components/layouts/PageWithContent";
import { Pages } from "../../navigationData/pages";

const hookCode = `
  const [state, setState] = useSyncedState(initialValue, { layer: <string> });
`.trim();

export default function Layers() {
  const theme = useTheme();

  return (
    <PageWithContent
      title={"Layers"}
      content={
        <>
          <article>
            <Typography variant={"body1"}>
              We have seen how to control state updates and manage their ordering. But what if you want to control
              different types of updates independently? Let us say that you have modals and notifications in your app.
              We&apos;d like to do the following:
            </Typography>
            <ol>
              <li>Sync all the notifications with each other so they open one by one.</li>
              <li>Sync all the modals with each other so they open one by one.</li>
              <li>Manage notification and modals independently. Opening/closing one shouldn&apos;t affect the other</li>
            </ol>
          </article>

          <section style={{ marginTop: theme.spacing(4) }}>
            <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h2"}>
              Separating updates using layers
            </Typography>
            <article>
              <Typography variant={"body1"} gutterBottom>
                Be default, all the updates are synced together. All of them are managed by a single global queue. We
                can separate the update requests into independent &quot;layers&quot;. Each layer has its own queue and
                works independently of other layers. That means all the state updates for a layer are synced together
                and do not affect or get affected by other layers. To assign layer to an update, set the layer option in
                the hook.
              </Typography>
              <CodeSnippet
                customStyle={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: theme.palette.grey[400],
                  borderRadius: theme.spacing(1),
                  marginTop: theme.spacing(1),
                  marginBottom: theme.spacing(2),
                }}
              >
                {hookCode}
              </CodeSnippet>
              <Typography variant={"body1"} gutterBottom>
                The default layer of a update is exported as <code>defaultLayerName</code> in the package. You can
                combine layers and priorities to order the updates as you&apos;d like them. Checkout the advanced
                examples section for ideas.
              </Typography>
              <CodePreview sourceCode={SourceCode}>
                <LayersDemo />
              </CodePreview>
            </article>
          </section>
        </>
      }
      previousLink={Pages.MainConcepts.Priority}
      nextLink={Pages.Examples.Index}
    />
  );
}
