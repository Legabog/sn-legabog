import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./SimpleMenu.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../assets/images/map.svg"
import dropdown from "../../../assets/images/icons/dropdown.svg";

export const SimpleMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.SimpleMenu}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          textTransform: "none",
          color: "#fff",
          transition: "none || none",
        }}
      >
        <div className={classes.loginblock}>
          <div className={classes.avatar}>
            <img src={props.avatar} alt="avatar"></img>
          </div>

          <p>
            <strong>{props.login}</strong>
          </p>
          <svg>
            <use href={map_svg + "#dropdown"}/>
          </svg>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {}}>
          <NavLink
            to={"/profile/"}
            style={{ color: "#4A76A8", textDecoration: "none" }}
          >
            My profile
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <NavLink
            style={{ color: "#4A76A8", textDecoration: "none" }}
            to={"/music"}
          >
            Music
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <NavLink
            style={{ color: "#4A76A8", textDecoration: "none" }}
            to={"/settings"}
          >
            Settings
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.logout();
          }}
        >
          <NavLink
            style={{ color: "#4A76A8", textDecoration: "none" }}
            to={"/login"}
          >
            Logout
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};
