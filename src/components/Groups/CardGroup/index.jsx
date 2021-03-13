import { useStyles } from "./styled";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { FaCheckSquare } from "react-icons/fa";

const CardGroup = () => {
  const classes = useStyles();
  const { groupsReduces } = useSelector((state) => state);

  return (
    <>
      {groupsReduces.map((ele, index) => (
        <Accordion key={index} className={classes.container}>
          <AccordionSummary
            className={classes.root}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>
              {ele.name} - {ele.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{ele.description}</Typography>
            <FaCheckSquare color="#06a595" size="24" />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CardGroup;
