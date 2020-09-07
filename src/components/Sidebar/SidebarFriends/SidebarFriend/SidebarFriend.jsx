import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./SidebarFriend.module.css"

const SidebarFriend = props => {
    let path = `/friends/${props.id}`;

    return (
        <div className={classes.item}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU"
                    alt="user"/>
            </div>
            <div>
                <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default SidebarFriend;