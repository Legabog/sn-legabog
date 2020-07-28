import React from "react";
import classes from "./Header.module.css";
import Logo from "../common/Logo/Logo";
import LoginBlock from "../common/LoginBlock/LoginBlock";
import SearchInput from "../common/SearchInput/SearchInput";
import Notify from "../common/Notify/Notify";

const Header = (props) => {
  return (
    <header className={classes.header}>
        <Logo />
        <SearchInput/>
        <Notify {...props}/>
        <LoginBlock {...props}/>
    </header>
  );
};

export default Header;
