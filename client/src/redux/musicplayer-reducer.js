const SET_MUSIC_FOR_PLAYER = "SET_MUSIC_FOR_PLAYER";
const TOGGLE_IS_PLAYING = "TOGGLE_IS_PLAYING";
const SET_INDEX_OF_TRACK = "SET_INDEX_OF_TRACK";
const SET_ACTIVE_TRACK = "SET_ACTIVE_TRACK";

let initialState = {
  musicPlayerPlayList: null,
  isPlaying: false,
  indexOfPlayingTrack: 0,
  activeTrack: null,
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

export const playPlayer = (activeTrack, data, index) => {
  return (dispatch) => {
    dispatch(toggleIsPlaying(true));
    dispatch(setIndexOfTrack(index));
    dispatch(setMusicForPlayer(data));
    dispatch(setActiveTrack(activeTrack))
  };
};

export const nextTrack = (activeTrack, index) => {
  return (dispatch) => {
    dispatch(toggleIsPlaying(true));
    dispatch(setIndexOfTrack(index));
    dispatch(setActiveTrack(activeTrack))
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
