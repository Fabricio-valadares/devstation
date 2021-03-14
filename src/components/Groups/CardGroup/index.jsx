import { useState, useEffect } from "react";
import { useStyles } from "./styled";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";

const CardGroup = ({
  valueInput,
  booleanValue,
  valueFilter,
  setBooleanValue,
}) => {
  const classes = useStyles();
  const { groupsReduces } = useSelector((state) => state);

  const [stringSearch, setStringSearch] = useState([]);

  const funUpadateCardGroups = () => {
    const filterGroups = groupsReduces.filter((ele) => ele.name === valueInput);
    if (filterGroups.length !== 0) {
      setStringSearch(filterGroups);
    }
  };

  useEffect(() => {
    if (valueInput.length > 1 && valueFilter.length > 0) {
      setBooleanValue(false);
    }

    setStringSearch(valueFilter);
  }, [valueFilter]);

  useEffect(() => {
    if (valueInput.length < 1000) {
      setStringSearch(groupsReduces);
    }

    funUpadateCardGroups();
  }, [valueInput]);

  useEffect(() => {
    setStringSearch(groupsReduces);
  }, [groupsReduces]);

  return (
    <>
      {booleanValue ? (
        <h1 style={{ color: "#fff", margin: "40px 0 0 0" }}>
          Esse grupo não existe !
        </h1>
      ) : (
        stringSearch.map((ele, index) => (
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
                <FaRegEye style={{ cursor: "pointer" }} size="22" />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CardGroup;
