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
  name?: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({ heading, name, body, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogTitle>{heading}</DialogTitle>
      <DialogContent>
        <DialogContentText>{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} aria-label={"close"}>
          Close {name}
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
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique tincidunt. Duis eget nisi ut diam consequat vulputate at ut diam.`}
        heading={"Dialog 1: Lorem Ipsum Dolor Sit Amet"}
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
          .fill(
            `Praesent mattis a tellus suscipit venenatis. Morbi rutrum, elit in vulputate ornare, mi nunc laoreet est, ac semper lectus justo eu est. Donec quis convallis ligula, eget facilisis lacus.`
          )
          .join("\n")}
        heading={"Dialog 2: Lorem Ipsum Dolor Sit Amet"}
        open={secondDialogOpen}
        onClose={() => setSecondDialogOpen(false)}
      />
      <Drawer open={drawerOpen} anchor={"right"} onClose={() => setDrawerOpen(false)}>
        <Typography variant={"h1"} sx={{ margin: [1, 2] }}>
          Drawer 1: Hello World
        </Typography>
        <Button aria-label={"close"} onClick={() => setDrawerOpen(false)}>
          Close Drawer 1
        </Button>
      </Drawer>
    </div>
  );
}
