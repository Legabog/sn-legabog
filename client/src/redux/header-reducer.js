const TOGGLE_NOTIFY = "TOGGLE_NOTIFY";

let initialState = {
  notify: true,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTIFY: {
      return {
        ...state,
        notify: !state.notify
      };
    }

    default:
      return state;
  }
};

export const toggleNotify = () => {
  return {
    type: TOGGLE_NOTIFY
  };
};


export default headerReducer;
