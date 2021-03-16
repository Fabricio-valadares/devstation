import React from "react";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { StyledMenu, StyledMenuItem } from "./styled";
import { FiMenu } from "react-icons/fi";
import { DashIcon, GroupIcon, UsersIcon } from "../Aside/styled";
import { Link, useHistory } from "react-router-dom";

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <FiMenu fontSize="large" />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className="menu-link" to="/dashboard">
          <StyledMenuItem>
            <ListItemIcon>
              <DashIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"></ListItemText>
          </StyledMenuItem>
        </Link>

        <Link className="menu-link" to="/groups">
          <StyledMenuItem>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Grupos"></ListItemText>
          </StyledMenuItem>
        </Link>

        <Link className="menu-link" to="/users">
          <StyledMenuItem>
            <ListItemIcon>
              <UsersIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios"></ListItemText>
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
