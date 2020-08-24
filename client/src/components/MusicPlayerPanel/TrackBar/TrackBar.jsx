import React from "react";
import classes from "../MusicPlayerPanel.module.css";

const TrackBar = (props) => {
  let audio = document.getElementById("audio");


  const calculateTime = (seconds = 0, guide = seconds) => {
    let s = Math.floor(seconds % 60);
    let m = Math.floor((seconds / 60) % 60);
    let h = Math.floor(seconds / 3600);
    const gm = Math.floor((guide / 60) % 60);
    const gh = Math.floor(guide / 3600);

    if (isNaN(seconds) || seconds === Infinity) {
      h = m = s = "-";
    }

    h = h > 0 || gh > 0 ? `${h}:` : "";
    m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
    s = s < 10 ? `0${s}` : s;

    return h + m + s;
  };

  return (
    <React.Fragment>
      <div className={classes.trackBar}>
        <input
          disabled={props.activeTrack !== null ? false : true}
          id="trackBarRange"
          type="range"
          min="0"
          max={isNaN(audio.duration) ? null : audio.duration}
          step="1"
          value={props.audioCurrentTime}
          style={{
            background: `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%,#E6E6E6 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%, #E6E6E6 100%)`,
          }}
          onInput={() => {
            let trackBarRange = document.getElementById("trackBarRange");

            trackBarRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%,#E6E6E6 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%, #E6E6E6 100%)`;
          }}
          onClick={() => {
            let trackBarRange = document.getElementById("trackBarRange");
            trackBarRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%,#E6E6E6 ${
              (props.audioCurrentTime / audio.duration) * 100
            }%, #E6E6E6 100%)`;
          }}
          onChange={props.audioTimeHandler}
        />
        <div className={classes.time}>
          <div className={classes.currentTime}>
            <h5>{calculateTime(props.audioCurrentTime)}</h5>
          </div>
          <div className={classes.timeLeft}>
            <h5>
              {isNaN(audio.duration)
                ? "-0:00"
                : "-" + calculateTime(audio.duration - props.audioCurrentTime)}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrackBar;
