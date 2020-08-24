import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const CHANGE_STATUS_HANDLER = "CHANGE_STATUS_HANDLER";
const GET_CAPTCHA = "GET_CAPTCHA";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_FOLLOW_STATUS = "SET_FOLLOW_STATUS";
const TOGGLE_FETCH_STATUS = "TOGGLE_FETCH_STATUS";
const DELETE_POST = "DELETE_POST"

let initialState = {
  PostsData: [],
  profile: null,
  profilePhoto:
    "https://firebasestorage.googleapis.com/v0/b/covers-storage.appspot.com/o/avatar%20Url%2FAvatar.jpg?alt=media",
  profileStatus: "Change status",
  captcha: "",
  followStatus: null,
  fetchStatus: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        message: action.text,
        date: action.date,
        time: action.time,
      };
      return {
        ...state,
        PostsData: [...state.PostsData, newPost],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        PostsData: [...state.PostsData].slice(0, action.index).concat([...state.PostsData].slice(action.index + 1, [...state.PostsData].length)),
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.status ? action.status : "Change status",
      };
    }

    case CHANGE_STATUS_HANDLER: {
      return {
        ...state,
        profileStatus: action.status,
      };
    }

    case GET_CAPTCHA: {
      return {
        ...state,
        captcha: action.captcha,
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }

    case SET_FOLLOW_STATUS: {
      return {
        ...state,
        followStatus: action.status,
      };
    }

    case TOGGLE_FETCH_STATUS: {
      return {
        ...state,
        fetchStatus: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (text, date, time) => {
  return {
    type: ADD_POST,
    text,
    date,
    time
  };
};

export const deletePost = (index) => {
  return {
    type: DELETE_POST,
    index
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};

export const changeStatusHandler = (status) => {
  return {
    type: CHANGE_STATUS_HANDLER,
    status,
  };
};

export const setCaptcha = (captcha) => {
  return {
    type: GET_CAPTCHA,
    captcha,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const setFollowStatus = (status) => {
  return {
    type: SET_FOLLOW_STATUS,
    status,
  };
};

export const setFetchStatus = (status) => {
  return {
    type: TOGGLE_FETCH_STATUS,
    status,
  };
};

export const getCaptcha = () => {
  return (dispatch) =>
    userAPI.getCaptcha().then((response) => {
      dispatch(setCaptcha(response.url));
    });
};

export const getProfile = (userId) => {
  return (dispatch) =>
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
};

export const getProfileStatus = (userId) => {
  return (dispatch) =>
    userAPI.getProfileStatus(userId).then((response) => {
      dispatch(setProfileStatus(response));
    });
};

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    userAPI.updateProfileStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export const getFollowStatus = (userId) => {
  return (dispatch) => {
    userAPI.getFollow(userId).then((response) => {
      dispatch(setFollowStatus(response));
    });
  };
};

export const setFollowTrue = (userId) => {
  return (dispatch) => {
    dispatch(setFetchStatus(true));
    userAPI.follow(userId).then((response) => {
      dispatch(setFetchStatus(false));
      dispatch(setFollowStatus(true));
    });
  };
};

export const setFollowFalse = (userId) => {
  return (dispatch) => {
    dispatch(setFetchStatus(true));
    userAPI.unfollow(userId).then((response) => {
      dispatch(setFetchStatus(false));
      dispatch(setFollowStatus(false));
    });
  };
};

export const savePhoto = (file) => {
  return (dispatch) => {
    userAPI.savePhoto(file).then((response) => {
      if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
      }
    });
  };
};

export default profileReducer;
