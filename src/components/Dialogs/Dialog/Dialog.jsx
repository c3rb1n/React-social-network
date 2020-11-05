import React from "react";
import classes from "./Dialog.module.scss";
import userPhoto from "../../../assets/images/user.svg";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {NavLink} from "react-router-dom";

const Dialog = ({userId, currentDialogData, sendMessage}) => {
    const messagesElements = userId &&
        currentDialogData.messages.map(m => <div className={classes.dialog__message}>{m}</div>);

    const onSendMessage = values => {
        sendMessage(values.newMessageText, userId - 1);
        values.newMessageText = "";
    };

    return (
        <div className={classes.dialog}>
            <NavLink className={classes.dialog__header} to="/*">
                <img className={classes.dialog__userPhoto} src={userPhoto} alt="user"/>
                <span className={classes.dialog__userFirstName}>{currentDialogData.name}</span>
            </NavLink>
            <div className={classes.dialog__messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={onSendMessage}/>
        </div>
    );
};

export default Dialog;