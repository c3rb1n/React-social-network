import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = props => {
    if (!props.isAuth) return <Redirect to="/login"/>

    let dialogsElements = props.dialogs.map(d =>
        <DialogItem
            key={d.id}
            id={d.id}
            name={d.name}/>);
    let messagesElements = props.messages.map(m =>
        <Message key={m.id}
                 id={m.id}
                 name={m.name}
                 messages={m.messages}
                 newMessageText={m.newMessageText}
                 updateNewMessageText={props.updateNewMessageText}
                 sendMessage={props.sendMessage}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;