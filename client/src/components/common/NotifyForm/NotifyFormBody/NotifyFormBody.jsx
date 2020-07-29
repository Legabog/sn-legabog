import React from "react"
import classes from "./NotifyFormBody.module.css"
import NotifyFormItem from "./NotifyFomItem/NotifyFormItem"
import { useState } from "react";
import BackDrop from "./NotifyFomItem/BackDrop/BackDrop"
import NotifyInformation from "./NotifyInformation/NotifyInformation";

const NotifyFormBody = (props) => {
    let [modalWindowisOpen, toggleModalWindow] = useState(false);

  const setModalWindow = () => {
      toggleModalWindow(!modalWindowisOpen)
  }
    return (
        <div className={classes.notifyFormBody}>
            <NotifyFormItem setModalWindow={setModalWindow}  text={"On July 20 at 20:20 an attempt was made to log into your account from your iPhone via Safari."}/>
            <NotifyFormItem setModalWindow={setModalWindow} text={"On July 15 at 15:15 an attempt was made to log into your account from your iPhone via Safari."}/>
            <NotifyFormItem setModalWindow={setModalWindow} text={"On July 10 at 10:10 an attempt was made to log into your account from your iPhone via Safari."}/>
            
            {modalWindowisOpen 
                ? <NotifyInformation setModalWindow={setModalWindow} />
                : null}
            <BackDrop isOpen={modalWindowisOpen} onClick={setModalWindow}/>
        </div>
    )
}

export default NotifyFormBody