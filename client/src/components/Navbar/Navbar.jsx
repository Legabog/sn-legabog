import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../assets/images/map.svg";


const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.list}>
        <ul>
          <li>
            <div className={`${classes.item} ${classes.active}`}>
              <svg>
                <use href={map_svg + "#user"} />
              </svg>
              <NavLink to="/profile" activeClassName={classes.active}>
                <span>Profile</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={classes.item}>
              <svg>
                <use href={map_svg + "#chats"} />
              </svg>
              <NavLink to="/dialogs" activeClassName={classes.active}>
                <span>Messages</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={classes.item}>
              <svg>
                <use href={map_svg + "#news"} />
              </svg>
              <NavLink to="/news" activeClassName={classes.active}>
                <span>News</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={classes.item}>
              <svg>
                <use href={map_svg + "#music"} />
              </svg>
              <NavLink to="/music" activeClassName={classes.active}>
                <span>Music</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={classes.item}>
              <svg>
                <use href={map_svg + "#settings"} />
              </svg>
              <NavLink to="/settings" activeClassName={classes.active}>
                <span>Settings</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={classes.item}>
              <svg>
                <use href={map_svg + "#users"} />
              </svg>
              <NavLink to="/users" activeClassName={classes.active}>
                <span>Users</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </div>

      {/* <FriendsList state={store.getState().navbarReducer} /> */}
    </nav>
  );
};

export default Navbar;
