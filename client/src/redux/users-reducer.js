import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: true };
          }
          return e;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress].filter((e) => e !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCount = (users) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: users,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

export const unFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    userAPI
      .unfollow(id)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(unfollow(id));
        }
      })
      .then(() => dispatch(toggleFollowingProgress(false, id)));
  };
};

export const Follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    userAPI
      .follow(id)
      .then((response) => {
        if (response.resultCode === 0) {
         dispatch(follow(id));
        }
      })
      .then(() => dispatch(toggleFollowingProgress(false, id)));
  };
};

export default usersReducer;
