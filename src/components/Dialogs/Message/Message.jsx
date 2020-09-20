import React from "react";
import classes from "./Message.module.css";

const Message = props => {
    let messagesElements = props.messages.map(m => <div className={classes.message} key={m.id}>{m.message}</div>);

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text, props.id);
    };

    let onSendMessage = () => {
        props.sendMessage(props.id);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.title}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU"
                        alt="user"/>
                </div>
                <div className={classes.user}>
                    {props.name}
                </div>
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.form}>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}
                              placeholder="Enter your message"/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;