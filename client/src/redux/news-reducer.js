import { userAPI } from "../api/api";

const SET_NEWS_DATA = "SET_NEWS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_COUNTRY = "SET_COUNTRY";
const SET_CATEGORY = "SET_CATEGORY";

let initialState = {
  news: [],
  isFetching: true,
  country: "ar",
  category: "business",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        ...state,
        news: action.news,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.country,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};

export const setCountry = (country) => {
  return {
    type: SET_COUNTRY,
    country,
  };
};

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  };
};

export const setNewsData = (news) => {
  return {
    type: SET_NEWS_DATA,
    news,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const getNews = (country, category) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI
      .getNews(country, category)
      .then((response) => {
        dispatch(setNewsData(response.articles))
        dispatch(toggleIsFetching(false));
      })
  };
};

export default newsReducer;
