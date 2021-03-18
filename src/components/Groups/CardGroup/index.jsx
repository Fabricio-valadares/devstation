import { useState } from "react";
import {
  useStyles,
  Container,
  ContainerTitle,
  TitleMobile,
  FaRegEyeStyled,
  DivIcon,
} from "./styled";
import Typography from "@material-ui/core/Typography";
import { FaRegEye } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";
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
        <ModalGroup ele={dataGroup} close={handleClose} />
      </Modal>
      {groupsData
        .filter((user) =>
          user.name?.toLowerCase().includes(valueInput.toLowerCase())
        )
        .map((ele, index) => (
          <div key={index} className={classes.container}>
            <div className={classes.root}>
              <Typography className={classes.heading}>
                <span id="groupImage">
                  <FiGitBranch />
                </span>
                <div id="groupInfo">
                  <span id="nameGroups">{ele.name}</span>{" "}
                  <span>Categoria: {ele.category}</span>{" "}
                </div>
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
