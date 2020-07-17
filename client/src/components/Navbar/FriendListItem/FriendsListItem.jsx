import React from 'react'
import classes from './FriendsListItem.module.css'

const FriendsListItem = props => {
    return (
        <div className={classes.friendslistitem}>
            <div>
                <img src={props.imgpath} alt="description"/>
                <p><strong/>{props.name}<strong/></p>
            </div>
        </div>
    )
}

export default FriendsListItem