const TOGGLE_NOTIFY_OPACITY = "TOGGLE_NOTIFY_OPACITY"

let initialState = {
  notifyOpacity: 0,
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFY_OPACITY:
      return {
        ...state,
        notifyOpacity: action.boolean,
      };

    default:
      return state;
  }
};

export const toggleNotifyOpacity = (boolean) => {
    return {
        type: TOGGLE_NOTIFY_OPACITY,
        boolean
    }
}

export default notifyReducer;