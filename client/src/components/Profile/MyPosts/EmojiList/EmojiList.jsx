import React from "react";
import classes from "./EmojiList.module.css";
import { useState } from "react";

const EmojiList = (props) => {
  const [emojiList] = useState([
    "0x1F601",
    "0x1F602",
    "0x1F603",
    "0x1F604",
    "0x1F605",
    "0x1F606",
    "0x1F60D",
    "0x1F60F",
    "0x1F612",
    "0x1F616",
    "0x1F618",
    "0x1F61A",
    "0x1F61C",
    "0x1F61D",
    "0x1F620",
    "0x1F621",
    "0x1F624",
    "0x1F62B",
    "0x1F631",
    "0x1F637",
    "0x1F638",
    "0x1F639",
    "0x1F63A",
    "0x1F63B",
    "0x1F63C",
    "0x1F63D",
    "0x1F63E",
    "0x1F640",
    "0x1F64F",
    "0x1F493",
    "0x1F494",
    "0x1F4A9",
    "0x1F4AA",
    "0x1F60E",
    "0x1F611",
  ]);


  return (
    <div
      className={classes.emojiList}
      style={{ visibility: `${props.emojiListVisibility}` }}
    >
      {emojiList.map((e, i) => (
        <div className={classes.emojiListItem} key={i}>
          {" "}
          <p
            onClick={() =>
              props.setMessage(props.message + String.fromCodePoint(e))
            }
          >
            {String.fromCodePoint(e)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
