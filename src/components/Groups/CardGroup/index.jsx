import { useState } from "react";
import { useStyles, SpanName, SpanCategory } from "./styled";
import { FaRegEye } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";
import Modal from "../../Modal";
import ModalGroup from "../ModalGroup";

const CardGroup = ({ groupsData, valueInput }) => {
  const classes = useStyles();

  const [dataGroup, setDataGroup] = useState({});

  const [open, setOpen] = useState(false);

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
              <div className={classes.heading}>
                <span id="groupImage">
                  <FiGitBranch />
                </span>

                <div id="groupInfo">
                  <SpanName id="nameGroups">{ele.name}</SpanName>
                  <SpanCategory>Categoria: {ele.category}</SpanCategory>{" "}
                </div>
              </div>
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
