import React from "react";
import classes from "./Friend.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assets/images/user.svg";

const Friend = ({photo, firstName}) => {
    return (
        <NavLink className={classes.friend} to="/*">
                <img className={classes.friend__avatar}
                     src={photo ? photo : userPhoto} alt="avatar"/>
            <span className={classes.friend__firstName}>{firstName}</span>
        </NavLink>
    );
};

export default Friend;