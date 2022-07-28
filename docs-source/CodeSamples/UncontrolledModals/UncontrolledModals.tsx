import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Drawer from "@mui/material/Drawer";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

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

export default function UncontrolledModals() {
  const [firstDialogOpen, setFirstDialogOpen] = useState(false);
  const [secondDialogOpen, setSecondDialogOpen] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openModals = () => {
    setFirstDialogOpen(true);
    setTimeout(() => setSuccessAlertOpen(true), 500);
    setTimeout(() => setSecondDialogOpen(true), 100);
    setDrawerOpen(true);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Modal
        heading={"Dialog 1"}
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique tincidunt. Duis eget nisi ut diam consequat vulputate at ut diam.`}
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
        heading={"Dialog 2"}
        body={new Array(20)
          .fill(
            `Praesent mattis a tellus suscipit venenatis. Morbi rutrum, elit in vulputate ornare, mi nunc laoreet est, ac semper lectus justo eu est. Donec quis convallis ligula, eget facilisis lacus.`
          )
          .join("\n")}
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
