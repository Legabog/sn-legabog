const TOGGLE_NOTIFY_TOP = "TOGGLE_NOTIFY_TOP";
const TOGGLE_NOTIFY_OPACITY = "TOGGLE_NOTIFY_OPACITY";
const TOGGLE_NOTIFY_VISIBILITY = "TOGGLE_NOTIFY_VISIBILITY";

let initialState = {
  notifyTop: "72px",
  notifyOpacity: 0,
  notifyVisibility: "hidden",
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFY_TOP:
      return {
        ...state,
        notifyTop: state.notifyTop === "72px" ? "60px" : "72px",
      };

    case TOGGLE_NOTIFY_OPACITY:
      return {
        ...state,
        notifyOpacity: state.notifyOpacity === 0 ? 1 : 0,
      };

    case TOGGLE_NOTIFY_VISIBILITY:
      return {
        ...state,
        notifyVisibility: state.notifyVisibility === "hidden" ? "visible" : "hidden",
      };

    default:
      return state;
  }
};

export const toggleNotifyForm = () => {
  return (dispatch) => {
    dispatch(toggleNotifyTop())
    dispatch(toggleNotifyOpacity())
    dispatch(toggleNotifyVisibility())
  }
};

export const toggleNotifyTop = () => {
  return {
    type: TOGGLE_NOTIFY_TOP,
  };
};

export const toggleNotifyOpacity = () => {
  return {
    type: TOGGLE_NOTIFY_OPACITY,
  };
};

export const toggleNotifyVisibility = () => {
  return {
    type: TOGGLE_NOTIFY_VISIBILITY,
  };
};

export default notifyReducer;
