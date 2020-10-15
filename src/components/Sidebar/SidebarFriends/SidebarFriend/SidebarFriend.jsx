import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./SidebarFriend.module.css"
import userPhoto from "../../../../assets/images/user.png";

const SidebarFriend = props => {
    let path = `/friends/${props.id}`;

    return (
        <div className={classes.item}>
            <div>
                <img
                    src={userPhoto}
                    alt="user"/>
            </div>
            <div>
                <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default SidebarFriend;