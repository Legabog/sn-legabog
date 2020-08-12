import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./SimpleMenu.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../assets/images/map.svg";

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
            <use href={map_svg + "#dropdown"} />
          </svg>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "260px" }}
      >
        <div className={classes.menuHeader}>
          <div className={classes.signedInfo}>
            <p>
              Signed in as <strong>{props.login}</strong>
            </p>
          </div>
          <hr />
        </div>
        <MenuItem onClick={() => {}}>
          <NavLink
            to={"/profile/"}
            style={{ textDecoration: "none", color: "#4a76a8" }}
          >
            <div className={classes.linkToProfile}>
              <svg>
                <use href={map_svg + "#user"} />
              </svg>
              <h3>Profile</h3>
            </div>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <NavLink
            to={"/music"}
            style={{ textDecoration: "none", color: "#4a76a8" }}
          >
            <div className={classes.linkToMusic}>
              <svg>
                <use href={map_svg + "#music"} />
              </svg>
              <h3>Music</h3>
            </div>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <NavLink
            to={"/settings"}
            style={{ textDecoration: "none", color: "#4a76a8" }}
          >
            <div className={classes.linkToSettings}>
              <svg>
                <use href={map_svg + "#settings"} />
              </svg>
              <h3>Settings</h3>
            </div>
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.logout();
          }}
        >
          <NavLink
            to={"/login"}
            style={{ textDecoration: "none", color: "#4a76a8" }}
          >
            <div className={classes.linkToLogout}>
              <svg>
                <use href={map_svg + "#logout"} />
              </svg>
              <h3>Logout</h3>
            </div>
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};
