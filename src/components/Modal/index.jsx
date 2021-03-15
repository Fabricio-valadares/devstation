import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { openModalThunk } from "../../store/modules/Modal/thunks";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#560BAD",
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ children, open, handleClose }) {
  const classes = useStyles();
  // // const open = true;

  // const open = useSelector((state) => state.open);

  // const dispatch = useDispatch();

  // const handleClose = () => {
  //   // setOpen(false);
  //   dispatch(openModalThunk(false));
  // };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{children}</div>
        </Fade>
      </Modal>
    </div>
  );
}
