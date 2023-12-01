import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CodePreview from "../../components/code/CodePreview";
import PriorityQueueDemo, { SourceCode } from "../../CodeSamples/PriorityQueueDemo";
import CodeSnippet from "../../components/code/CodeSnippet";
import PageWithContent from "../../components/layouts/PageWithContent";
import { Pages } from "../../navigationData/pages";

const hookCode = `
  const [state, setState] = useSyncedState(initialValue, { priority: <number> });
`.trim();

export default function Queueing() {
  const theme = useTheme();

  return (
    <PageWithContent
      title={"Priorities"}
      content={
        <>
          <Typography variant={"body1"}>
            We have seen how state updates can be queued. But we still have no control over ordering. The updates are
            processed in FIFO manner. It is possible to control the ordering by using priorities.
          </Typography>

          <section style={{ marginTop: theme.spacing(4) }}>
            <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h2"}>
              Ordering updates using priorities
            </Typography>
            <article>
              <Typography variant={"body1"} gutterBottom>
                The state update queue is ordered by priority value of the update. For updates with same priority, it
                behaves like a FIFO queue. Highest priority updates are processed first. To assign priority to an
                update, set the priority option in the hook.
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
                And that&apos;s it. The default priority of a update is exported as <code>defaultPriority</code> in the
                package. You can use that and build priority values around it. This value is <code>0</code> but that is
                an implementation detail and should not be relied on. To create an update with highest priority, you can
                set this value to <code>Infinity</code>. To create an update with lowest priority, you can set this
                value to <code>-Infinity</code>. To create other levels, add or subtract numbers from{" "}
                <code>defaultPriority</code>.
              </Typography>
              <CodePreview sourceCode={SourceCode}>
                <PriorityQueueDemo />
              </CodePreview>
            </article>
          </section>
        </>
      }
      previousLink={Pages.MainConcepts.Queueing}
      nextLink={Pages.MainConcepts.Layers}
    />
  );
}
