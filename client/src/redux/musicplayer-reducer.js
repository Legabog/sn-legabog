const SET_MUSIC_FOR_PLAYER = "SET_MUSIC_FOR_PLAYER";
const TOGGLE_IS_PLAYING = "TOGGLE_IS_PLAYING";
const SET_INDEX_OF_TRACK = "SET_INDEX_OF_TRACK";
const SET_ACTIVE_TRACK = "SET_ACTIVE_TRACK";
const SET_DISABLER_BUTTON_NEXT = "SET_DISABLER_BUTTON_NEXT"

let initialState = {
  musicPlayerPlayList: null,
  isPlaying: false,
  indexOfPlayingTrack: 0,
  activeTrack: null,
  disablerButtonNext: false
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_FOR_PLAYER:
      return {
        ...state,
        musicPlayerPlayList: action.payload,
      };

    case TOGGLE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.boolean,
      };

    case SET_INDEX_OF_TRACK:
      return {
        ...state,
        indexOfPlayingTrack: action.index,
      };

    case SET_ACTIVE_TRACK:
      return {
        ...state,
        activeTrack: action.track,
      };
    
    case SET_DISABLER_BUTTON_NEXT:
      return {
        ...state,
        disablerButtonNext: action.boolean
      }
    
    default:
      return state;
  }
};

export const setMusicForPlayer = (payload) => {
  return {
    type: SET_MUSIC_FOR_PLAYER,
    payload,
  };
};

export const setIndexOfTrack = (index) => {
  return {
    type: SET_INDEX_OF_TRACK,
    index,
  };
};

export const setActiveTrack = (track) => {
  return {
    type: SET_ACTIVE_TRACK,
    track,
  };
};

export const toggleIsPlaying = (boolean) => {
  return {
    type: TOGGLE_IS_PLAYING,
    boolean,
  };
};

export const setDisablerButtonNext = (boolean) => {
  return {
    type: SET_DISABLER_BUTTON_NEXT,
    boolean
  }
}

export const playPlayer = (activeTrack, data, index) => {
  return (dispatch) => {
    dispatch(toggleIsPlaying(true));
    dispatch(setIndexOfTrack(index));
    dispatch(setMusicForPlayer(data));
    dispatch(setActiveTrack(activeTrack))


    setTimeout(() => {
      let audio = document.getElementById("audio")
      audio.src = activeTrack.trackUrl;
      audio.currentTime = 0;
      audio.play()
    }, 10)

  };
};

export const nextTrack = (activeTrack, index) => {
  return (dispatch) => {
    dispatch(toggleIsPlaying(true));
    dispatch(setIndexOfTrack(index));
    dispatch(setActiveTrack(activeTrack))
    dispatch(setDisablerButtonNext(true))

    setTimeout(() => {
      let audio = document.getElementById("audio")
      audio.src = activeTrack.trackUrl;
      audio.currentTime = 0;
      audio.play()
    }, 10)

    setTimeout(() => {
      dispatch(setDisablerButtonNext(false))
    }, 800)
  }
}

export const previousTrack = (activeTrack, index) => {
  return (dispatch) => {
    dispatch(toggleIsPlaying(true));
    dispatch(setIndexOfTrack(index));
    dispatch(setActiveTrack(activeTrack))
    dispatch(setDisablerButtonNext(true))

    setTimeout(() => {
      let audio = document.getElementById("audio")
      audio.src = activeTrack.trackUrl;
      audio.currentTime = 0;
      audio.play()
    }, 10)

    setTimeout(() => {
      dispatch(setDisablerButtonNext(false))
    }, 800)
  }
}


export const pausePlayer = () => {
  return (dispatch) => {
    let audio = document.getElementById("audio");
    audio.pause();
    dispatch(toggleIsPlaying(false));
  };
};

export default musicPlayerReducer;
