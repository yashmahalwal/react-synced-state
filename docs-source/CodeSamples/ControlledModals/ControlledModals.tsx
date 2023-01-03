import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import Drawer from "@mui/material/Drawer/Drawer";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSyncedState } from "../../../src";
import Snackbar from "@mui/material/Snackbar";

interface ModalProps extends DialogProps {
  heading: React.ReactNode;
  body: React.ReactNode;

  onClose?(): void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ heading, body, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogTitle>{heading}</DialogTitle>
      <DialogContent>
        <DialogContentText>{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} aria-label={"close"}>
          Close
        </Button>
        <Button onClick={props.onClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

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
        name={"Dialog 1"}
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        heading={"Dialog 1"}
        open={firstDialogOpen}
        onClose={() => setFirstDialogOpen(false)}
      />
      <Snackbar open={successAlertOpen}>
        <Alert severity={"success"} variant={"filled"} onClose={() => setSuccessAlertOpen(false)}>
          Alert 1: This is a success alert! Yoo-hoo!
        </Alert>
      </Snackbar>
      <Button variant={"contained"} onClick={openModals}>
        Click Me
      </Button>
      <Modal
        name={"Dialog 2"}
        body={new Array(20)
          .fill(`Praesent mattis a tellus suscipit venenatis. Morbi rutrum, elit in vulputate ornare`)
          .join("\n")}
        heading={"Dialog 2"}
        open={secondDialogOpen}
        onClose={() => setSecondDialogOpen(false)}
      />
      <Drawer open={drawerOpen} anchor={"right"} onClose={() => setDrawerOpen(false)}>
        <Typography variant={"h1"} sx={{ margin: [1, 2] }}>
          Drawer 1
        </Typography>
        <Button aria-label={"close"} onClick={() => setDrawerOpen(false)}>
          Close
        </Button>
      </Drawer>
    </div>
  );
}
