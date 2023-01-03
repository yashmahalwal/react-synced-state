import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import Modal from "../../components/Modal";
import { useSyncedState } from "../../../src";

enum Layers {
  DIALOG = "DIALOG",
  NOTFICATIONS = "NOTIFICATIONS",
}

export default function LayersDemo() {
  const [firstDialogOpen, setFirstDialogOpen] = useSyncedState(false, { layer: Layers.DIALOG });
  const [secondDialogOpen, setSecondDialogOpen] = useSyncedState(false, { layer: Layers.DIALOG });
  const [thirdDialogOpen, setThirdDialogOpen] = useSyncedState(false, { layer: Layers.DIALOG });
  const [firstAlertOpen, setFirstAlertOpen] = useSyncedState(false, { layer: Layers.NOTFICATIONS });
  const [secondAlertOpen, setSecondAlertOpen] = useSyncedState(false, { layer: Layers.NOTFICATIONS });
  const [thirdAlertOpen, setThirdAlertOpen] = useSyncedState(false, { layer: Layers.NOTFICATIONS });

  const openModals = () => {
    setFirstAlertOpen(true);
    setFirstDialogOpen(true);
    setTimeout(() => setSecondDialogOpen(true), 200);
    setTimeout(() => setSecondAlertOpen(true), 300);
    setTimeout(() => setThirdAlertOpen(true), 500);
    setTimeout(() => setThirdDialogOpen(true), 500);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        heading={"Dialog 1"}
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        open={firstDialogOpen}
        onClose={() => setFirstDialogOpen(false)}
      />
      <Modal
        heading={"Dialog 2"}
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        open={secondDialogOpen}
        onClose={() => setSecondDialogOpen(false)}
      />
      <Modal
        heading={"Dialog 3"}
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        open={thirdDialogOpen}
        onClose={() => setThirdDialogOpen(false)}
      />
      <Snackbar open={firstAlertOpen}>
        <Alert severity={"success"} variant={"filled"} onClose={() => setFirstAlertOpen(false)}>
          Alert 1: This is a success alert! Yoo-hoo!
        </Alert>
      </Snackbar>
      <Snackbar open={secondAlertOpen}>
        <Alert severity={"warning"} variant={"filled"} onClose={() => setSecondAlertOpen(false)}>
          Alert 2: This is a warning alert! Oops!
        </Alert>
      </Snackbar>
      <Snackbar open={thirdAlertOpen}>
        <Alert severity={"error"} variant={"filled"} onClose={() => setThirdAlertOpen(false)}>
          Alert 3: This is an error alert! Uh-Oh!
        </Alert>
      </Snackbar>
      <Button variant={"contained"} onClick={openModals}>
        Click Me
      </Button>
    </div>
  );
}
