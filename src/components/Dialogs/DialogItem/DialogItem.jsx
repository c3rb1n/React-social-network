import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={classes.dialog}>
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

export default DialogItem;