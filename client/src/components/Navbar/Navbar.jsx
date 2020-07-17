import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import user from "../../assets/images/icons/navbar/user.svg";
import chats from "../../assets/images/icons/navbar/chats.svg";
import news from "../../assets/images/icons/navbar/news.svg";
import music from "../../assets/images/icons/navbar/music.svg";
import settings from "../../assets/images/icons/navbar/settings.svg";
import users from "../../assets/images/icons/navbar/users.svg";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.list}>
        <li>
          <div className={`${classes.item} ${classes.active}`}>
            <img src={user} alt="user"></img>
            <NavLink to="/profile" activeClassName={classes.active}>
              <span>Profile</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={chats} alt="chats"></img>
            <NavLink to="/dialogs" activeClassName={classes.active}>
              <span>Messages</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={news} alt="news"></img>
            <NavLink to="/news" activeClassName={classes.active}>
              <span>News</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={music} alt="music"></img>
            <NavLink to="/music" activeClassName={classes.active}>
              <span>Music</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={settings} alt="settings"></img>
            <NavLink to="/settings" activeClassName={classes.active}>
              <span>Settings</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={users} alt="user"></img>
            <NavLink to="/users" activeClassName={classes.active}>
              <span>Users</span>
            </NavLink>
          </div>
        </li>
      </div>

      {/* <FriendsList state={store.getState().navbarReducer} /> */}
    </nav>
  );
};

export default Navbar;
