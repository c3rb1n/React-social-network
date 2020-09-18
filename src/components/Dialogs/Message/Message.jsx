import React from "react";
import classes from "./Message.module.css";
import {updateNewMessageTextActionCreator, sendMessageActionCreator,} from "../../../redux/dialogsPage-reducer";

const Message = props => {
    let messagesElements = props.messages.map(m => <div className={classes.message}>{m.message}</div>);

    let onMessageChange = (event) => {
        let text = event.target.value;
        let action = updateNewMessageTextActionCreator(text, props.id);
        props.dispatch(action);
    };

    let sendMessage = () => {
        let action = sendMessageActionCreator(props.id);
        props.dispatch(action);
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
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;