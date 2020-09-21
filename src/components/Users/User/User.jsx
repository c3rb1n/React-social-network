import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";

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
                <img src={props.photo != null ? props.photo : userPhoto} alt="user"/>
            </div>
            <div>{props.followed ?
                <button onClick={onUnfollow}>Unfollow</button> :
                <button onClick={onFollow}>Follow</button>
            }
            </div>
            <div>{props.name}</div>
            <div>{props.status}</div>
            <div>{"props.country"}</div>
            <div>{"props.city"}</div>
        </div>
    );
};

export default User;