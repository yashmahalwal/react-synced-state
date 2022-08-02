import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSyncedState } from "../../../src";
import { Typography } from "@mui/material";

export default function QueueDemo() {
  const [syncedState1, setSyncedState1] = useSyncedState(false);
  const [syncedState2, setSyncedState2] = useSyncedState(false);
  const [syncedState3, setSyncedState3] = useSyncedState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const [queue, setQueue] = useState<number[]>([]);

  const manageQueue = useCallback((entry: number, enter: boolean) => {
    if (enter) {
      setQueue((q) => (q.includes(entry) ? q : [...q, entry]));
    } else {
      setQueue((q) => q.filter((e) => e !== entry));
    }
  }, []);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flex={1}
      justifyContent={"space-around"}
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <Box>
        <Typography variant={"h3"} component={"p"}>
          Queue: [{queue.join(", ")}]
        </Typography>
      </Box>
      <Box>
        <FormGroup>
          <FormControlLabel
            label={`State 1`}
            control={
              <>
                <Checkbox
                  checked={state1}
                  onChange={(e) => {
                    setSyncedState1(e.target.checked);
                    setState1(e.target.checked);
                    manageQueue(1, e.target.checked);
                  }}
                />
              </>
            }
          />
          <FormControlLabel
            label={`State 2`}
            control={
              <Checkbox
                checked={state2}
                onChange={(e) => {
                  setSyncedState2(e.target.checked);
                  setState2(e.target.checked);
                  manageQueue(2, e.target.checked);
                }}
              />
            }
          />
          <FormControlLabel
            label={`State 3`}
            control={
              <Checkbox
                checked={state3}
                onChange={(e) => {
                  setSyncedState3(e.target.checked);
                  setState3(e.target.checked);
                  manageQueue(3, e.target.checked);
                }}
              />
            }
          />
        </FormGroup>
      </Box>
      <Box>
        <FormGroup>
          <FormControlLabel label={`Synced State 1`} control={<Checkbox disabled checked={syncedState1} />} />
          <FormControlLabel label={`Synced State 2`} control={<Checkbox disabled checked={syncedState2} />} />
          <FormControlLabel label={`Synced State 3`} control={<Checkbox disabled checked={syncedState3} />} />
        </FormGroup>
      </Box>
    </Box>
  );
}
