import React from "react";
import classes from "./Body.module.css";
import { useState } from "react";
import map_svg from "../../../../assets/images/map.svg";
import {
  requiredField,
  maxLength100,
} from "../../../../utils/validators/validators";
import EmojiList from "../EmojiList/EmojiList";

const Body = (props) => {
  const [checkedStatus, setChecked] = useState(false);
  const [emojiListVisibility, setEmojiListVisibility] = useState("hidden");

  const emojiListVisibilityHandler = () => {
    emojiListVisibility === "hidden"
      ? setEmojiListVisibility("visible")
      : setEmojiListVisibility("hidden");
  };

  const foramtDate = () => {
    let date = new Date();

    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    switch (mm) {
      case 1:
        mm = "Jan";
        break;
      case 2:
        mm = "Feb";
        break;
      case 3:
        mm = "Mar";
        break;
      case 4:
        mm = "Apr";
        break;
      case 5:
        mm = "May";
        break;
      case 6:
        mm = "Jun";
        break;
      case 7:
        mm = "Jul";
        break;
      case 8:
        mm = "Aug";
        break;
      case 9:
        mm = "Sep";
        break;
      case 10:
        mm = "Oct";
        break;
      case 11:
        mm = "Nov";
        break;
      case 12:
        mm = "Dec";
        break;
      default:
        break;
    }

    let yy = date.getYear() % 100;
    if (yy < 10) yy = "0" + yy;

    return dd + " " + mm + " " + yy;
  };

  const foramtHoursAndMinutes = () => {
    let date = new Date();

    let hh = date.getHours();
    if (hh < 10) hh = "0" + hh;

    let mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;

    return hh + ":" + mm;
  };

  const onEnterPressAndTabPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (
        (checkedStatus === true && requiredField(props.message)) ||
        props.message === "" ||
        props.message.length > 100
      ) {
      } else {
        props.addPostActionCreator(
          props.message,
          foramtDate(),
          foramtHoursAndMinutes()
        );
        props.setMessage("");
        setChecked(false);
      }
    } else if (e.keyCode === 9) {
      e.preventDefault();
      emojiListVisibilityHandler();
    }
  };

  return (
    <div
      className={
        (checkedStatus === true && requiredField(props.message)) ||
        maxLength100(props.message)
          ? classes.errorTextAria
          : classes.inputMessage
      }
    >
      <textarea
        id="postInput"
        value={props.message}
        onChange={props.changeHanlder}
        placeholder={"Post new message"}
        onKeyDown={onEnterPressAndTabPress}
        onBlur={() => {
          setChecked(true);
        }}
      ></textarea>
      <div className={classes.emojiMenu}>
        <svg
          disabled={
            (checkedStatus === true && requiredField(props.message)) ||
            props.message === "" ||
            props.message.length > 100
              ? true
              : false
          }
          onClick={emojiListVisibilityHandler}
        >
          <use href={map_svg + "#smile"} />
        </svg>
        <EmojiList
          message={props.message}
          setMessage={props.setMessage}
          emojiListVisibility={emojiListVisibility}
        />
      </div>
      {checkedStatus === true && requiredField(props.message) ? (
        <div className={classes.error}>
          <span>
            <svg>
              <use href={map_svg + "#error"} />
            </svg>
            Field is required
          </span>
        </div>
      ) : null}
      {maxLength100(props.message) ? (
        <div className={classes.error}>
          <span>
            <svg>
              <use href={map_svg + "#error"} />
            </svg>
            Max length is a 100 symbols
          </span>
        </div>
      ) : null}
      <button
        disabled={
          (checkedStatus === true && requiredField(props.message)) ||
          props.message === "" ||
          props.message.length > 100
            ? true
            : false
        }
        onClick={() => {
          props.addPostActionCreator(
            props.message,
            foramtDate(),
            foramtHoursAndMinutes()
          );
          props.setMessage("");
          setChecked(false);
        }}
      >
        Post message
      </button>
    </div>
  );
};

export default Body;
