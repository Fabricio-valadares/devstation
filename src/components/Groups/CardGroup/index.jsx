import { useState } from "react";
import { useStyles } from "./styled";
import Typography from "@material-ui/core/Typography";
import { FaRegEye } from "react-icons/fa";
import Modal from "../../Modal";
import ModalGroup from "../ModalGroup";

const CardGroup = ({ groupsData, valueInput }) => {
  const classes = useStyles();

  const [dataGroup, setDataGroup] = useState({});
  const [open, setOpen] = useState();

  const handleClick = (ele) => {
    setDataGroup(ele);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <ModalGroup ele={dataGroup} />
      </Modal>
      {groupsData
        .filter((user) =>
          user.name?.toLowerCase().includes(valueInput.toLowerCase())
        )
        .map((ele, index) => (
          <div key={index} className={classes.container}>
            <div className={classes.root}>
              <Typography className={classes.heading}>
                <img
                  id="imgAccordon"
                  src="https://picsum.photos/40/40"
                  alt="imgRandom"
                />
                <span id="nameGroups">{ele.name}</span> <span>Categoria:</span>{" "}
                {ele.category}
              </Typography>
              <div id="Icon">
                <FaRegEye
                  style={{ cursor: "pointer", color: "#fff" }}
                  size="22"
                  onClick={() => handleClick(ele)}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardGroup;
