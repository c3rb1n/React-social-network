import React from "react";
import classes from "./User.module.scss";
import userPhoto from "../../../assets/images/user.svg";
import {NavLink} from "react-router-dom";

const User = ({id, photo, followed, name, status, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.user}>
            <div className={classes.user__userData}>
                <NavLink to={`/profile/${id}`}>
                    <img className={classes.user__avatar} src={photo != null ? photo : userPhoto} alt="user"/>
                </NavLink>
                <div className={classes.user__userInfo}>
                    <NavLink className={classes.user__name} to={`/profile/${id}`}>{name}</NavLink>
                    <span className={classes.user__status}>{status}</span>
                </div>
            </div>
            {followed ?
                <button className={classes.user__unfollow}
                        disabled={followingInProgress.some(i => i === id)}
                        onClick={() => unfollow(id)}>Unfollow</button> :
                <button className={classes.user__follow}
                        disabled={followingInProgress.some(i => i === id)}
                        onClick={() => follow(id)}>Follow</button>}
        </div>
    );
};

export default User;