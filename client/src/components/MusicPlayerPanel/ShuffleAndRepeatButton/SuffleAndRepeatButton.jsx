import React from "react";
import classes from "../MusicPlayerPanel.module.css";
import map_svg from "../../../assets/images/map.svg";

const ShuffleAndRepeatButton = (props) => {
  return (
    <React.Fragment>
      <div className={classes.shuffleAndRepeat}>
        <button
          disabled={props.activeTrack !== null ? false : true}
          style={{ marginLeft: "513px" }}
          onClick={props.setRepeatState}
        >
          <svg>
            <use
              href={
                props.repeatState === 0
                  ? map_svg + "#repeat"
                  : props.repeatState === 1
                  ? map_svg + "#repeat_active"
                  : map_svg + "#repeat-one_active"
              }
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default ShuffleAndRepeatButton;
