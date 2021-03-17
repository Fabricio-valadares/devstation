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
      <Container>
        {groupsData
          .filter((user) =>
            user.name?.toLowerCase().includes(valueInput.toLowerCase())
          )
          .map((ele, index) => (
            <div key={index} className={classes.container}>
              <div className={classes.root}>
                <ContainerTitle>
                  <Typography className={classes.heading}>
                    <img
                      id="imgAccordon"
                      src="https://picsum.photos/40/40"
                      alt="imgRandom"
                    />
                  </Typography>
                  <TitleMobile>
                    <span id="nameGroups" style={{ marginRight: "16px" }}>
                      {ele.name}
                    </span>

                    <span style={{ fontWeight: "600" }}>
                      Categoria: {ele.category}
                    </span>
                  </TitleMobile>
                </ContainerTitle>

                <DivIcon>
                  <FaRegEyeStyled
                    color={"#fff"}
                    size="22"
                    onClick={() => handleClick(ele)}
                  />
                </DivIcon>
              </div>
            </div>
          ))}
      </Container>
    </>
  );
};

export default CardGroup;
