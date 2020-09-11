import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    let dialogsElements = props.state.dialogs.map(d =>
        <DialogItem
            id={d.id}
            name={d.name}/>);
    let messagesElements = props.state.messages.map(m =>
        <Message id={m.id}
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