import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./ActionSwitcher.module.css"
import { NavLink } from "react-router-dom";
import options from "../../../../../../assets/images/icons/music/options.svg"

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
          <img src={options} alt="options"></img>
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

        }}><NavLink style={{color: "#4A76A8", textDecoration: "none"}} to={`/music-list/playlists`}>Add to a Playlist</NavLink></MenuItem>
      </Menu>
    </div>
  );
};
