const TOGGLE_NOTIFY_OPACITY = "TOGGLE_NOTIFY_OPACITY";
const OFF_NOTIFY_OPACITY = "OFF_NOTIFY_OPACITY";

let initialState = {
  notifyOpacity: 0,
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFY_OPACITY:
      return {
        ...state,
        notifyOpacity: state.notifyOpacity === 0 ? 1 : 0,
      };

    case OFF_NOTIFY_OPACITY:
      return {
        ...state,
        notifyOpacity: state.notifyOpacity === 1 ? 0 : 0,
      };

    default:
      return state;
  }
};

export const offNotifyOpacity = () => {
  return {
    type: OFF_NOTIFY_OPACITY,
  };
};

export const toggleNotifyOpacity = () => {
  return {
    type: TOGGLE_NOTIFY_OPACITY,
  };
};

export default notifyReducer;
