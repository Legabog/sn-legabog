import React from "react";
import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.list}>
        <ul>
          <li>
            <NavbarItem
              svgId={"#user"}
              itemName={"Profile"}
              link={"/profile"}
            />
          </li>
          <li>
            <NavbarItem
              svgId={"#chats"}
              itemName={"Messages"}
              link={"/dialogs"}
            />
          </li>
          <li>
            <NavbarItem svgId={"#news"} itemName={"News"} link={"/news"} />
          </li>
          <li>
            <NavbarItem svgId={"#music"} itemName={"Music"} link={"/music"} />
          </li>
          <li>
            <NavbarItem
              svgId={"#settings"}
              itemName={"Settings"}
              link={"/settings"}
            />
          </li>
          <li>
            <NavbarItem svgId={"#users"} itemName={"Users"} link={"/users"} />
          </li>
        </ul>
      </div>

      {/* <FriendsList state={store.getState().navbarReducer} /> */}
    </nav>
  );
};

export default Navbar;
