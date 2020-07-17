import React from "react";
import UserPhoto from "../../assets/images/user.png";
import Pagination from "@material-ui/lab/Pagination";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.rootdiv}>
      <div className={classes.userslider}>
        <div className={classes.root}>
          <Pagination
            count={pagesCount}
            onChange={(e, page) => {
              props.getUsers(page);
            }}
          />
        </div>
      </div>
      <div className={classes.cardsdiv}>
        {props.users.map((e) => (
          <div key={e.id} className={classes.usercard}>
            <span>
              <div className={classes.shortinfo}>
                <NavLink to={"/profile/" + e.id}>
                  <img
                    src={e.photos.small != null ? e.photos.small : UserPhoto}
                    className={classes.userphoto}
                    alt="description"
                  />
                </NavLink>
                <span>
                  <h4>
                    <strong>{e.name}</strong>
                  </h4>
                  <NavLink to={"/profile/" + e.id}>
                    <p>
                      Link to profile
                    </p>
                  </NavLink>
                  <p>{e.status || "Нет статуса"}</p>
                </span>
              </div>
              <div>
                {e.followed ? (
                  <button 
                    disabled = {props.followingInProgress.includes(e.id)}
                    className={classes.unfollowbutton}
                    onClick={() => {
                      props.unFollow(e.id);                      
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled = {props.followingInProgress.includes(e.id)}
                    className={classes.followbutton}
                    onClick={() => {
                      props.Follow(e.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <hr className={classes.hrline}/>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Users;
