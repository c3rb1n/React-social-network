import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

let AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};

AddMessageForm = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);

const Dialogs = props => {
    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

    const onSendMessage = values => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.title}>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU"
                            alt="user"/>
                    </div>
                    <div className={classes.user}>
                        Ilya
                    </div>
                </div>
                <div className={classes.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <AddMessageForm onSubmit={onSendMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;