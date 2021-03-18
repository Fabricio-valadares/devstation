import { Menu, MenuItem, withStyles } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  background-color: white;
  div,
  ul,
  li {
    background-color: white !important;
  }
`;

export const Navigation = styled.div`
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;

    a.menu-link {
      padding: 8px 16px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: var(--text);
      box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
        6px 6px 16px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in;

      &:hover {
        background-color: var(--text);
      }

      &:active {
        box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
          6px 6px 16px rgba(0, 0, 0, 0.2),
          inset -6px -6px 16px rgba(255, 255, 255, 0.09),
          inset 6px 6px 16px rgba(0, 0, 0, 0.2);
      }
      p {
        font-size: 10px;
        color: var(--text);
        font-weight: bold;
      }
    }
  }
`;

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    ".MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: "white",
    },

    "&:focus": {
      // backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const LinkDashBoard = styled(Link)`
  li {
    background-color: ${(props) =>
      props.location === "/dashboard" ? "#30336B" : "transparent"};
  }

  width: 100%;
  height: 100%;
`;
export const LinkGroups = styled(Link)`
  li {
    background-color: ${(props) =>
      props.location === "/groups" ? "#30336B" : "transparent"};
  }
  width: 100%;
  height: 100%;
`;
export const LinkUsers = styled(Link)`
  li {
    background-color: ${(props) =>
      props.location === "/users" ? "#30336B" : "transparent"};
  }
  width: 100%;
  height: 100%;
`;
