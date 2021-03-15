import { useState, useEffect } from "react";
import { useStyles } from "./styled";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import Modal from "../../Modal";
import { openModalThunk } from "../../../store/modules/Modal/thunks";
import ModalGroup from "../ModalGroup";

const CardGroup = ({ groupsData, valueInput }) => {
  const classes = useStyles();

  const [dataGroup, setDataGroup] = useState({});

  const dispatch = useDispatch();

  const handleClick = (ele) => {
    dispatch(openModalThunk(true));
    setDataGroup(ele);
  };

  return (
    <>
      <Modal>
        <ModalGroup ele={dataGroup} />
      </Modal>
      {groupsData
        .filter((user) =>
          user.name?.toLowerCase().includes(valueInput.toLocaleLowerCase())
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
                  style={{ cursor: "pointer" }}
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
