import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./ActionSwitcher.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../../../assets/images/map.svg";
import { useState } from "react";

export const ActionSwitcher = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHover(0)
  };

  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div
      className={classes.ActionSwitcher}
      onMouseOver={() => {
        setHover(1);
      }}
      onMouseOut={() => {
        setHover(0);
      }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          textTransform: "none",
          color: "#fff",
          transition: "none" || "none",
        }}
      >
        <div className={classes.icon}>
          <svg>
            <use
              href={hover ? map_svg + "#options_hover" : map_svg + "#options"}
            />
          </svg>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{width: "380px"}}
      >
        <div className={classes.root}>
          <div className={classes.descriptionHeader}>
            <img src={props.albumCover} alt="mini_album_cover"/>
            <div className={classes.titleAndAuthor}>
              <h3>{props.title}</h3>
              <p>{props.author}</p>
            </div>
            <svg onClick={handleClose}>
              <use href={map_svg + "#cancel_other_fill"}/>
            </svg>
          </div>

          <hr />
        </div>
        <MenuItem
          onClick={() => {
            props.switchStateOfPlayLists(true);
            props.addTrackToPlayList(
              props.title,
              props.author,
              props.trackUrl,
              props.albumTitle,
              props.albumCover
            );
          }}
        >
          <NavLink
            style={{ color: "#4A76A8", textDecoration: "none" }}
            to={`/music-list/playlists`}
          >
            <div className={classes.addToPlayList}>
              <svg >
                <use href={map_svg + "#add_to_play_list"} />
              </svg>
              <h3>Add to a Playlist</h3>
            </div>
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};
