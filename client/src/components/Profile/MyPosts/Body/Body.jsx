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
          props.addPostActionCreator(props.message);
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
