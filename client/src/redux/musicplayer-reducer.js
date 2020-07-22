const SET_MUSIC_FOR_PLAYER = "SET_MUSIC_FOR_PLAYER";
const TOGGLE_IS_PLAYING = "TOGGLE_IS_PLAYING";

let initialState = {
  musicPlayerPlayList: null,
  isPlaying: false,
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

export const toggleIsPlaying = (boolean) => {
  return {
    type: TOGGLE_IS_PLAYING,
    boolean,
  };
};

export const playPlayer = () => {
  return (dispatch) => {
    let audio = document.getElementById("audio")
    audio.play()
    dispatch(toggleIsPlaying(true))
  }
}

export const pausePlayer = () => {
  return (dispatch) => {
    let audio = document.getElementById("audio")
    audio.pause()
    dispatch(toggleIsPlaying(false))
  }
}

export default musicPlayerReducer;
