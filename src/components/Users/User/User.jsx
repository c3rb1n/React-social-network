import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const User = ({id, photo, followed, name, status, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={classes.userPhoto}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photo != null ? photo : userPhoto} alt="user"/>
                </NavLink>
            </div>
            <div>
                {followed ?
                    <button disabled={followingInProgress.some(i => i === id)}
                            onClick={() => unfollow(id)}>Unfollow</button> :
                    <button disabled={followingInProgress.some(i => i === id)}
                            onClick={() => follow(id)}>Follow</button>}
            </div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{"props.country"}</div>
            <div>{"props.city"}</div>
        </div>
    );
};

export default User;