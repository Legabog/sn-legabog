import React from "react";
import classes from "./LoginBlock.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { SimpleMenu } from "../SimpleMenu/SimpleMenu";
import Avatar from "../../../assets/images/user.png"

const LoginBlock = (props) => {
  return (
    <div className={classes.loginBlockMain}>
      {props.isAuth ? (
        <SimpleMenu {...props}/>
      ) : (
        <>
        <Redirect to={"/login"}/>
        <NavLink to={"login"} style={{textDecoration: "none"}}>
          <div className={classes.loginblock}>
            <img src={Avatar} alt="ava"></img>
            <p>
              <strong>LOGIN</strong>
            </p>
          </div>
        </NavLink>
        </>
      )}
    </div>
  );
};

export default LoginBlock;
