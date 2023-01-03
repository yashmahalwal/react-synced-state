import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Footer from "../../components/Footer";
import CodePreview from "../../components/CodePreview";
import QueueDemo, { SourceCode } from "../../CodeSamples/QueueDemo";

export default function Queueing() {
  const theme = useTheme();
  return (
    <Container sx={{ padding: 6 }} maxWidth={"lg"}>
      <Typography gutterBottom variant={"h4"} fontWeight={"bold"} component={"h1"}>
        Queueing state updates
      </Typography>
      <Typography variant={"body1"}>
        This hook works by queueing all your state updates at a global level. That is how it is able to process the
        state updates one by one. This section explains how you can queue state updates and determine the output of the
        hook without running into unexpected bugs.
      </Typography>

      <section style={{ marginTop: theme.spacing(4) }}>
        <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h2"}>
          Entering and leaving the queue
        </Typography>
        <article>
          <Typography variant={"body1"} gutterBottom>
            To add a state update to queue, you set a <code>truthy</code> state value. To remove a state update from
            queue, you set a <code>falsy</code> state value. This process works on two levels - global level and the
            hook level. You can also replace the <code>truthy</code> & <code>falsy</code> check with your own custom
            check.
          </Typography>
          <CodePreview sourceCode={SourceCode}>
            <QueueDemo />
          </CodePreview>
          <section>
            <Typography variant={"h6"} component={"h3"} gutterBottom>
              Global level
            </Typography>
            <ol>
              <li>
                When state transitions from a <code>falsy</code> to a <code>truthy</code>, a unique ID is added the to
                global queue. This is to keep track of your transition request from a <code>falsy</code> state to a{" "}
                <code>truthy</code> state.
              </li>
              <li>
                Whenever the queue changes, front of queue is calculated. The hook that requested this transition is
                given a go ahead to set a <code>truthy</code> value. All the other transitions everywhere else are
                blocked on hook level.
              </li>
              <li>
                When the hook transitions to a <code>falsy</code> value, its ID is removed from the queue and next entry
                comes to the front
              </li>
              <li>
                It is important to remember that generated ID tracks the transition between <code>truthy</code>truthy
                and <code>falsy</code>falsy. So changing from a <code>truthy</code> value to another <code>truthy</code>{" "}
                value will have no effect in the queue. Same applies for <code>falsy</code> values.{" "}
              </li>
            </ol>
          </section>
          <section>
            <Typography variant={"h6"} component={"h3"} gutterBottom sx={{ marginTop: (theme) => theme.spacing(1) }}>
              Hook level
            </Typography>
            <ol>
              <li>
                The hook has maintains two values. First one is the current state value. This value is updated normally
                with <code>setState</code> calls. The second one is a cached value that we call{" "}
                <code>oldStateValue</code>. This is the latest <code>falsy</code> value passed to the hook.
              </li>
              <li>
                What is returned from the hook depends on the global queue. If the hook&apos;s transition request is at
                the front of the queue, current state is returned. Otherwise we return the cached <code>falsy</code>{" "}
                value.
              </li>
            </ol>
          </section>
        </article>
      </section>
      <section style={{ marginTop: theme.spacing(4) }}>
        <Typography gutterBottom variant={"h5"} fontWeight={"bold"} component={"h1"}>
          Edge cases
        </Typography>
        <article>
          <Typography variant={"body1"}>
            Now we cover some edge cases with queueing so as to provider a better idea your updates are handled.
          </Typography>
          <ol>
            <li>
              If the hook has a <code>truthy</code> initial value, then the entry is made to the queue as soon as the
              hook mounts. This is done as it is natural to want this initial to block other transitions across the app.{" "}
              <code>oldStateValue</code> is set to the initial value by default. So even when it is not this hook&apos;s
              turn at the front of the queue, it will still return that truthy value. Avoid passing <code>truthy</code>{" "}
              initial value to avoid bugs.
            </li>
            <li>
              If the state value is set to <code>falsy</code>, return value is immediately updated to this value. If you
              set a series of <code>falsy</code> values one after the another, those will be reflected at the same time
              in return value.
            </li>
            <li>
              If the ID is at the front of queue (current state must be <code>truthy</code>) and you update the state to
              another truthy value, return value is immediately updated to the new value. If you set a series of{" "}
              <code>truthy</code> values one after the another, those will be reflected at the same time in return
              value.
            </li>
            <li>
              If the ID is not at the front of queue but current state is <code>truthy</code>,{" "}
              <code>last falsy value</code> is returned. Even if you keep on updating to other <code>truthy</code>{" "}
              values, the <code>last falsy value</code> will be returned. When the ID goes to the front of the queue,
              the latest truthy value will be returned
            </li>
            <li>If the ID is in queue and the component unmounts, ID is removed from the queue.</li>
          </ol>
        </article>
      </section>
      <Footer
        back={{
          route: "/main-concepts",
          label: "Main Concepts",
        }}
        forward={{
          route: "/main-concepts/priority",
          label: "Priority",
        }}
      />
    </Container>
  );
}
