import React from "react";
import classes from "./Message.module.css";

const Message = props => {
    let messagesElements = props.messages.map(m => <div className={classes.message}>{m}</div>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;

        alert(text);
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;