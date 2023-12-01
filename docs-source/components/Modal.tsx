import Dialog, { DialogProps } from "@mui/material/Dialog";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface ModalProps extends DialogProps {
  heading: React.ReactNode;
  body: React.ReactNode;

  onClose?(): void;

  name?: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({ heading, body, name, ...props }) => {
  return (
    <Dialog {...props}>
      {props.open && (
        <>
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
        </>
      )}
    </Dialog>
  );
};

export default Modal;
