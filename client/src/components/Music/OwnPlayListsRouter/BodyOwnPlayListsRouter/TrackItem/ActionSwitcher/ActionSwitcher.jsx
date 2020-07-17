import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./ActionSwitcher.module.css";

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
        style={{
          textTransform: "none",
          color: "#fff",
          transition: "none" || "none",
        }}
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
        style={{ width: "220px" }}
      >
        <MenuItem
          onClick={() => {
            props.deleteTrackFromPlayList(props.id, props.pid);
          }}
          style={{ color: "#4A76A8", fontSize: "130%", align: "center" }}
        >
          Delete from playlist
        </MenuItem>
      </Menu>
    </div>
  );
};
