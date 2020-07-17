import { userAPI } from "../api/api";

const ADD_FRIEND = "ADD_FRIEND";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  friends: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const friendslistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        ...state,
        friends: [...state.friends, action.friend],
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    default:
      return state;
  }
};

export const addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    friend,
  };
};

export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setTotalUsersCountThunk = () => {
  return (dispatch) => {
    userAPI.getTotalUsersCount().then((response) => {
      dispatch(setTotalUsersCount(response.totalCount));
    })
    .then(() => {
      getFriends(1, 100)
    })
  };
};


export const getFriends = (
  page = initialState.currentPage,
  count = initialState.pageSize
) => {
  return (dispatch) => {
    dispatch(toggleIsFetching);
    userAPI.getUsers(page, count).then((response) => {
      console.log(response);
      for (let item of response.items) {
        if (item.followed === true) {
          dispatch(addFriend(item));
        }
      }
    });
  };
};

export default friendslistReducer;
