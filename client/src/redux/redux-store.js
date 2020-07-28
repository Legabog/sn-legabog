import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";
import settingsReducer from "./settings-reducer";
import headerReducer from "./header-reducer";
import friendslistReducer from "./friendslist-reducer";
import appReducer from "./app-reducer"
import musicAlbumsReducer from "./musicalbums-reducer"
import musicPlayListReducer from "./musicalplaylists-reducer"
import musicPlayerReducer from "./musicplayer-reducer"
import notifyReducer from "./notify-reducer"

import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  navbarReducer,
  usersReducer,
  authReducer,
  newsReducer,
  settingsReducer,
  friendslistReducer,
  headerReducer,
  form: formReducer,
  appReducer,
  musicPlayListReducer,
  musicAlbumsReducer,
  musicPlayerReducer,
  notifyReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
