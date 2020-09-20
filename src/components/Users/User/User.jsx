import React from "react";
import classes from "./User.module.css";

const User = props => {
    let onFollow = () => {
        props.follow(props.id);
    };

    let onUnfollow = () => {
        props.unfollow(props.id);
    };

    return (
        <div>
            <div className={classes.userPhoto}>
                <img src={props.photoUrl} alt="user"/>
            </div>
            <div>{(props.followed) ?
                <button onClick={onUnfollow}>Unfollow</button> :
                <button onClick={onFollow}>Follow</button>
            }
            </div>
            <div>{props.fullName}</div>
            <div>{props.status}</div>
            <div>{props.country}</div>
            <div>{props.city}</div>
        </div>
    );
};

export default User;