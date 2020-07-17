import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(authMe());
    promise.then(() => {
      dispatch(setInitializedSuccess());
    });
  };
};

export default appReducer;
