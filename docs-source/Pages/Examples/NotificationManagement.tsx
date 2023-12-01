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
                Let us take a look at what&apos;s happening here:
              </Typography>
              <ol>
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
                <li>
                  These switch toggles are also synchronized among themselves. The switch with higher blocking
                  capability will take precedence. This is done by putting state for toggles in a different{" "}
                  <code>layer</code> and assigning them <code>priorities</code>.
                </li>
              </ol>
            </Box>
          </article>
        </section>
      }
      previousLink={Pages.Examples.Index}
    />
  );
}
