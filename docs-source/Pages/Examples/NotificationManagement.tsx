import Typography from "@mui/material/Typography";
import React from "react";
import CodePreview from "../../components/code/CodePreview";
import NotificationManagementSystem, { SourceCode } from "../../CodeSamples/Examples/NotificationManagementSystem";
import Box from "@mui/material/Box";
import PageWithContent from "../../components/layouts/PageWithContent";
import { Pages } from "../../navigationData/pages";

export default function NotificationManagement() {
  return (
    <PageWithContent
      title={"Notification Management System"}
      content={
        <section>
          <article>
            <Typography variant={"body1"} gutterBottom>
              Welcome to our amazing notification system. With this example, you&apos;ll get a taste of how easy it is
              to manage notifications using <code>useSyncedState</code>. We&apos;ve created three notifications with
              increasing priorities, so you can see the difference in the behavior of notifications based on their
              priorities. You&apos;ll also see three toggle switches that allow you to block notifications with a
              certain priority level and lower.
            </Typography>
            <Typography variant={"body1"} gutterBottom>
              So go ahead, play with the toggles, and see how the notifications react to your changes! And remember,
              with react-synced-state, you&apos;re always in control. Enjoy!
            </Typography>
            <CodePreview sourceCode={SourceCode}>
              <NotificationManagementSystem />
            </CodePreview>
          </article>
          <article>
            <Box marginTop={2}>
              <Typography variant={"body1"} gutterBottom>
                If you look at the code carefully, we have 3 different sets of synced state hooks (priorities are
                relative to <code>defaultPriority</code>:
              </Typography>
              <ol>
                <li>
                  States for notification visible - <code>Layer: default, priority: 1</code>,{" "}
                  <code>Layer: default, priority: 3</code>, <code>Layer: default, priority: 5</code>. These are
                  synchronised so that only one notification is shown at once
                </li>
                <li>
                  States for blocking notifications - <code>Layer: default, priority: 2</code>,{" "}
                  <code>Layer: default, priority: 4</code>, <code>Layer: default, priority: 6</code>. These are
                  synchronised on the same layer as notifications. So when a given blocking state is set to true,
                  notifications with lower priority than this state update are hidden.
                </li>
                <li>
                  States for toggling block notification switches. These are normal state variables which are used to
                  track which level of notifications have been queued to block.
                </li>
              </ol>
              <Typography variant={"body1"} mt={2} gutterBottom>
                As a result, this is how the notifications behave:
              </Typography>
              <ul>
                <li>
                  All the notifications are triggerred together but show up one by one. These notifications have
                  differing severities (controlled by <code>priority</code> option in the hook)
                </li>
                <li>
                  Notifications can be blocked using toggle switches. When a notification is blocked, it doesn&apos;t
                  show up on being triggerred. When you unblock the notification from the toggle switch, it shows up.
                </li>
                <li>
                  When a switch toggle is enabled, it schedules a <code>true</code> state update with priority higher
                  than the corresponding notification. The update will block transition of making notification visible.
                </li>
              </ul>
            </Box>
          </article>
        </section>
      }
      previousLink={Pages.Examples.Index}
    />
  );
}
