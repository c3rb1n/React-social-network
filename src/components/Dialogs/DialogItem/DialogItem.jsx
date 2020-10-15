import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";

const DialogItem = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={classes.dialog}>
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

export default DialogItem;