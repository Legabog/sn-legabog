import React from "react";
import classes from "./MusicPlayerPanel.module.css";
import { useState, useEffect } from "react";
import BackDrop from "../common/BackDrop/BackDrop";
import AudioElement from "./AudioElement/AudioElement";
import OpenPlayerPanelDescription from "./OpenPlayerPanelDescription/OpenPlayerPanelDescription";
import OpenPlayerPanelControl from "./OpenPlayerPanelControl/OpenPlayerPanelControl";
import DropDownButton from "./DropDownButton/DropDownButton";
import ClosePlayerPanelDescription from "./ClosePlayerPanelDescription/ClosePlayerPanelDescription";
import TrackBar from "./TrackBar/TrackBar";
import ClosePlayerPanelControl from "./ClosePlayerPanelControl/ClosePlayerPanelControl";
import VolumeBar from "./VolumeBar/VolumeBar";
import ShuffleAndRepeatButton from "./ShuffleAndRepeatButton/SuffleAndRepeatButton";

const MusicPlayerPanel = (props) => {
  let audio = document.getElementById("audio");

  const [isOpen, switchCondition] = useState(true);

  const toggleMusicPanel = () => {
    switchCondition(!isOpen);
  };

  let [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioTimeHandler = (e) => {
    audioCurrentTime = audio.currentTime;
    setAudioCurrentTime((audio.currentTime = e.target.value));
  };

  useEffect(() => {
    let audio = document.getElementById("audio");
    setInterval(() => {
      setAudioCurrentTime(audio.currentTime);
    }, 1);
  }, []);

  let [volume, volumeH] = useState(1);

  const volumeHandler = (e) => {
    volumeH((audio.volume = e.target.value));
  };

  let [repeatState, toggleRepeatState] = useState(0);

  const setRepeatState = () => {
    switch (repeatState) {
      case 0:
        toggleRepeatState(1);
        break;
      case 1:
        toggleRepeatState(2);
        break;
      case 2:
        toggleRepeatState(0);
        break;
      default:
        break;
    }
  };

  const cls = [classes.MusicPlayerPanel];

  if (!isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      {isOpen ? (
        <div className={cls.join(" ")}>
          <OpenPlayerPanelDescription
            {...props}
            toggleMusicPanel={toggleMusicPanel}
          />
          <OpenPlayerPanelControl {...props} repeatState={repeatState} />
        </div>
      ) : (
        <div className={cls.join(" ")}>
          <DropDownButton toggleMusicPanel={toggleMusicPanel} />
          <ClosePlayerPanelDescription {...props} />
          <TrackBar
            {...props}
            audioCurrentTime={audioCurrentTime}
            audioTimeHandler={audioTimeHandler}
          />
          <ClosePlayerPanelControl {...props} repeatState={repeatState} />
          <VolumeBar
            {...props}
            volume={volume}
            volumeH={volumeH}
            volumeHandler={volumeHandler}
          />
          <ShuffleAndRepeatButton
          {...props}
            setRepeatState={setRepeatState}
            repeatState={repeatState}
          />
        </div>
      )}
      {isOpen ? null : <BackDrop onClick={toggleMusicPanel} />}
      <AudioElement {...props} volume={volume} repeatState={repeatState} />
    </React.Fragment>
  );
};

export default MusicPlayerPanel;
