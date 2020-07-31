import React from "react"
import classes from "./NotifyInformationBody.module.css"
import NotifyInformationItem from "./NotifyInformationItem/NotifyInformationItem"
import computer from "../../../../../../assets/images/icons/notify/computer.svg"
import apple_phone from "../../../../../../assets/images/icons/notify/apple_phone.svg"

const NotifyInformationBody = (props) => {
    return (
        <div className={classes.notifyInformationBody}>
            <NotifyInformationItem img={computer} typeOfSystem={"Mac OS"} city={"Санкт-Петербург" } country={"Россия"} description={"сегодня в 12:44 ● Браузер Safari"}/>
            <NotifyInformationItem img={computer} typeOfSystem={"Windows"} city={"Санкт-Петербург" } country={"Россия"} description={"сегодня в 10:44 ● Браузер Chrome"}/>
            <NotifyInformationItem img={computer} typeOfSystem={"Mac OS"} city={"Санкт-Петербург" } country={"Россия"} description={"сегодня в 9:44 ● Браузер Chrome"}/>
            <NotifyInformationItem img={apple_phone} typeOfSystem={"iPhone"} city={"Санкт-Петербург" } country={"Россия"} description={"сегодня в 8:44 Браузер ● Приложение ВКонтакте"}/>
            <NotifyInformationItem img={computer} typeOfSystem={"Mac OS"} city={"Санкт-Петербург" } country={"Россия"} description={"сегодня в 62:44 ● Браузер Safari"}/>
            <hr/>
        </div>
    )
}

export default NotifyInformationBody