import React from "react";
import classes from "./DialogPreview.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.svg";

const DialogPreview = ({id, name, lastMessage}) => {
    const path = `/dialogs/${id}`;

    if(!lastMessage) {
        return <div/>
    }

    return (
        <NavLink className={classes.dialogPreview} to={path}>
            <img className={classes.dialogPreview__userPhoto} src={userPhoto} alt="user"/>
            <div className={classes.dialogPreview_right}>
                <span className={classes.dialogPreview__name}>{name}</span>
                <span className={classes.dialogPreview__lastMessage}>
                    {lastMessage.length >= 45 ? `${lastMessage.slice(0, 47)}...` : lastMessage}
                </span>
            </div>
        </NavLink>
    );
};

export default DialogPreview;