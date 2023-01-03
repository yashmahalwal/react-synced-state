import Dialog, { DialogProps } from "@mui/material/Dialog/Dialog";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button";

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

export default Modal;
