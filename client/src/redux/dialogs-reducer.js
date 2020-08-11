const ADD_POST_DIALOGS = "ADD-POST-DIALOGS";

let initialState = {
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
      avatarpath: "https://gamepedia.cursecdn.com/wowpedia/6/69/BTNDrekthar.png"
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DIALOGS: {
      let newText = action.newMessageBody;
      let stateCopy = {
        ...state,
        MessagesData: [...state.MessagesData, {id: 11, message: newText}]
      };
      
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostDialogsActionCreator = (newMessageBody) => {
  return {
    type: ADD_POST_DIALOGS,
    newMessageBody
  };
};

export default dialogsReducer;
