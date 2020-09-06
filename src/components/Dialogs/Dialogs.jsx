import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

    let dialogs = [
        {id: 1, name: "Ilya"},
        {id: 2, name: "Vitaly"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Svyatoslav"},
        {id: 5, name: "Alexander"},
        {id: 6, name: "Dmitry"}
    ];

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What are you doing?"},
        {id: 4, message: "Hello!"},
        {id: 5, message: "Hello!"},
        {id: 6, message: "Hello!"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

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