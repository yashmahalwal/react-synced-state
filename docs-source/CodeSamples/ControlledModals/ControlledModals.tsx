import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer/Drawer";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSyncedState } from "../../../src";
import Snackbar from "@mui/material/Snackbar";
import Modal from "../../components/Modal";

export default function ControlledModals() {
  const [firstDialogOpen, setFirstDialogOpen] = useSyncedState(false);
  const [secondDialogOpen, setSecondDialogOpen] = useSyncedState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useSyncedState(false);
  const [drawerOpen, setDrawerOpen] = useSyncedState(false);
  const openModals = () => {
    setFirstDialogOpen(true);
    setTimeout(() => setSuccessAlertOpen(true), 500);
    setTimeout(() => setSecondDialogOpen(true), 1000);
    setDrawerOpen(true);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Modal
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        heading={"Dialog 1 title"}
        open={firstDialogOpen}
        onClose={() => setFirstDialogOpen(false)}
      />
      <Snackbar open={successAlertOpen}>
        <Alert severity={"success"} variant={"filled"} onClose={() => setSuccessAlertOpen(false)}>
          Alert title: This is a success alert! Yoo-hoo!
        </Alert>
      </Snackbar>
      <Button variant={"contained"} onClick={openModals}>
        Click Me
      </Button>
      <Modal
        body={new Array(20)
          .fill(`Praesent mattis a tellus suscipit venenatis. Morbi rutrum, elit in vulputate ornare`)
          .join("\n")}
        heading={"Dialog 2 title"}
        open={secondDialogOpen}
        onClose={() => setSecondDialogOpen(false)}
      />
      <Drawer open={drawerOpen} anchor={"right"} onClose={() => setDrawerOpen(false)}>
        {drawerOpen && (
          <>
            <Typography variant={"h1"} sx={{ margin: [1, 2] }}>
              Drawer title
            </Typography>
            <Button aria-label={"close"} onClick={() => setDrawerOpen(false)}>
              Close
            </Button>
          </>
        )}
      </Drawer>
    </div>
  );
}
