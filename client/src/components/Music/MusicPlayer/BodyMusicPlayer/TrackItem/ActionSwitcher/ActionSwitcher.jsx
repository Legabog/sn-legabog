import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./ActionSwitcher.module.css"
import { NavLink } from "react-router-dom";

export const ActionSwitcher = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.ActionSwitcher}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{textTransform: "none", color: "#fff" , transition: "none" || "none", }}
      >
        <div className={classes.icon}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { 
          props.switchStateOfPlayLists(true)
          props.addTrackToPlayList(props.title, props.author, props.trackUrl, props.albumTitle)

        }}><NavLink style={{color: "#4A76A8"}} to={`/music-list/playlists`}>Add to a Playlist</NavLink></MenuItem>
      </Menu>
    </div>
  );
};
