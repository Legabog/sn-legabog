const { default: profileReducer } = require("./profile-reducer");
import profileReducer, { addPostActionCreator } from "./profile-reducer";

test("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("legabog");
  let state = {
    PostsData: [],
    profile: null,
    profilePhoto:
      "https://firebasestorage.googleapis.com/v0/b/covers-storage.appspot.com/o/avatar%20Url%2FAvatar.jpg?alt=media",
    profileStatus: "Change status",
    captcha: "",
    followStatus: null,
    fetchStatus: false,
  };
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.PostsData.length).toBe(1);
});
