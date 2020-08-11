import React from "react"
import classes from "./NotifyInformationBody.module.css"
import NotifyInformationItem from "./NotifyInformationItem/NotifyInformationItem"


const NotifyInformationBody = (props) => {
    return (
        <div className={classes.notifyInformationBody}>
            <NotifyInformationItem img={"computer"} typeOfSystem={"Mac OS"} city={"Saint-Petersburg" } country={"Russia"} description={"today at 12:44 ● Safari Browser"}/>
            <NotifyInformationItem img={"computer"} typeOfSystem={"Windows"} city={"Saint-Petersburg" } country={"Russia"} description={"today at 10:44 ● Chrome Browser"}/>
            <NotifyInformationItem img={"computer"} typeOfSystem={"Mac OS"} city={"Saint-Petersburg" } country={"Russia"} description={"today at 9:44 ● Chrome Browser"}/>
            <NotifyInformationItem img={"apple_phone"} typeOfSystem={"iPhone"} city={"Saint-Petersburg" } country={"Russia"} description={"today at 8:44 Browser ● VK App"}/>
            <NotifyInformationItem img={"computer"} typeOfSystem={"Mac OS"} city={"Saint-Petersburg" } country={"Russia"} description={"today at 2:44 ● Browser Safari"}/>
            <hr/>
        </div>
    )
}

export default NotifyInformationBody