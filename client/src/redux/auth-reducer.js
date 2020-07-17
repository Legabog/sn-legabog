import { userAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl,
  };
};

export const authMe = () => {
  return (dispatch) => {
    return userAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    userAPI.login(email, password, rememberMe, captcha).then((response) => {
      // success, get auth
      if (response.resultCode === 0) {
        dispatch(authMe());
      } else {
        if (response.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        let messages =
          response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: messages }));
      }
    });
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await userAPI.getCaptcha();
  const captchaUrl = response.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => {
  return (dispatch) => {
    userAPI.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(getCaptchaUrlSuccess(null))
      }
    });
  };
};

export default authReducer;
