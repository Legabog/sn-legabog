import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import StartScreen from "./StartScreen/StartScreen";

const Music = (props) => {
  return (
      <StartScreen/> 
  );
};

export default withAuthRedirect(Music);
