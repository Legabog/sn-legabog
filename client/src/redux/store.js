import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    profilePage: {
      PostsData: [
        { id: 1, message: "Hi, how are you?", likes: 20 },
        { id: 2, message: "It's my first post", likes: 30 },
        { id: 3, message: "q", likes: 2 },
        { id: 4, message: "w", likes: 12 },
        { id: 5, message: "e", likes: 23 }
      ],
      newPostText: "legabozhestvo"
    },
    messagesPage: {
      DialogsData: [
        {
          id: 1,
          name: "Oleg",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/2/2b/BTNCritterChicken-Reforged.png"
        },
        {
          id: 2,
          name: "Dima",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/6/69/BTNDrekthar.png"
        },
        {
          id: 3,
          name: "Leha",
          avatarpath:
            "https://im0-tub-ru.yandex.net/i?id=50f395987d25877d3494778a95743d8c-sr&n=13&exp=1"
        },
        {
          id: 4,
          name: "Anton",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/f/f1/BTNAncestralSpirit-Reforged.png"
        },
        {
          id: 5,
          name: "Max",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/d/d5/BTNArchimonde-Reforged.png"
        }
      ],
      MessagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "yo" },
        { id: 4, message: "What's up" },
        { id: 5, message: "btw" },
        { id: 6, message: "..." },
        { id: 7, message: "=)" },
        { id: 8, message: "heh" },
        { id: 9, message: "cool" },
        { id: 10, message: "Go" }
      ],
      defaultMessage: "",
    },
    navbarPage: {
      FriendsList: [
        {
          name: "Oleg",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/2/2b/BTNCritterChicken-Reforged.png"
        },
        {
          name: "Dima",
          avatarpath:
            "https://gamepedia.cursecdn.com/wowpedia/6/69/BTNDrekthar.png"
        },
        {
          name: "Leha",
          avatarpath:
            "https://im0-tub-ru.yandex.net/i?id=50f395987d25877d3494778a95743d8c-sr&n=13&exp=1"
        }
      ]
    }
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagesPage, action);
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

    this._rerenderEntireTree(this._state);
  }
};

export default store;
