import React from "react"
import classes from "./NotifyForm.module.css"

const NotifyForm = (props) => {
    return (
        <div className={classes.notifyForm} style={{opacity: `${props.notifyOpacity}`}}>
            <h1>Notify Form</h1>
        </div>
    )
}

export default NotifyForm