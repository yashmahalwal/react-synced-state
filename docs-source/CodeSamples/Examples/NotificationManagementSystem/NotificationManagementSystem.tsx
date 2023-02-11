import React, { useCallback } from "react";
import { Alert, Snackbar, Switch } from "@mui/material";
import { defaultPriority, useSyncedState } from "../../../../src";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box/Box";

const TOGGLE_LAYER = "TOGGLE_LAYER";
const invertFunction = (prev: boolean) => !prev;
const NotificationManagementSystem = () => {
  const [notification1, setNotification1] = useSyncedState(false, {
    priority: defaultPriority + 2,
  });
  const [notification2, setNotification2] = useSyncedState(false, {
    priority: defaultPriority + 4,
  });
  const [notification3, setNotification3] = useSyncedState(false, {
    priority: defaultPriority + 6,
  });

  const [, setBlockNotification1] = useSyncedState(false, {
    priority: defaultPriority + 3,
  });
  const [, setBlockNotification2] = useSyncedState(false, {
    priority: defaultPriority + 5,
  });
  const [, setBlockNotification3] = useSyncedState(false, {
    priority: Infinity,
  });
  const [toggle1, setToggle1] = useSyncedState(false, {
    priority: defaultPriority + 3,
    layer: TOGGLE_LAYER,
  });
  const [toggle2, setToggle2] = useSyncedState(false, {
    priority: defaultPriority + 5,
    layer: TOGGLE_LAYER,
  });
  const [toggle3, setToggle3] = useSyncedState(false, {
    priority: Infinity,
    layer: TOGGLE_LAYER,
  });

  const handleShowNotifications = useCallback(() => {
    setNotification1(true);
    setNotification2(true);
    setNotification3(true);
  }, [setNotification1, setNotification2, setNotification3]);

  return (
    <Box>
      <Snackbar open={notification1}>
        <Alert variant={"filled"} onClose={() => setNotification1(false)} severity="success">
          Priority 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert>
      </Snackbar>
      <Snackbar open={notification2}>
        <Alert variant={"filled"} onClose={() => setNotification2(false)} severity="warning">
          Priority 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
      </Snackbar>
      <Snackbar open={notification3}>
        <Alert variant={"filled"} onClose={() => setNotification3(false)} severity="error">
          Priority 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Alert>
      </Snackbar>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={2}>
        <Button variant={"contained"} onClick={handleShowNotifications}>
          Show Notifications{" "}
        </Button>
      </Box>
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={toggle1}
                onChange={() => {
                  setBlockNotification1(invertFunction);
                  setToggle1(invertFunction);
                }}
              />
            }
            label="Stop notifications with priority 1 and lower"
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={toggle2}
                onChange={() => {
                  setBlockNotification2(invertFunction);
                  setToggle2(invertFunction);
                }}
              />
            }
            label="Stop notifications with priority 2 and lower"
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={toggle3}
                onChange={() => {
                  setBlockNotification3(invertFunction);
                  setToggle3(invertFunction);
                }}
              />
            }
            label="Stop all notifications irrespective of priority"
          />
        </FormGroup>
      </div>
    </Box>
  );
};

export default NotificationManagementSystem;
