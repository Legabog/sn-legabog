let initialState = {
  FriendsList: [
    {
      name: "Oleg",
      avatarpath:
        "https://gamepedia.cursecdn.com/wowpedia/2/2b/BTNCritterChicken-Reforged.png"
    },
    {
      name: "Dima",
      avatarpath: "https://gamepedia.cursecdn.com/wowpedia/6/69/BTNDrekthar.png"
    },
    {
      name: "Leha",
      avatarpath:
        "https://im0-tub-ru.yandex.net/i?id=50f395987d25877d3494778a95743d8c-sr&n=13&exp=1"
    }
  ]
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
