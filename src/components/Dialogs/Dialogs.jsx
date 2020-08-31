import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = props => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
};

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Ilya" id="1"/>
                <DialogItem name="Vitaly" id="2"/>
                <DialogItem name="Sergey" id="3"/>
                <DialogItem name="Svyatoslav" id="4"/>
                <DialogItem name="Alexander" id="5"/>
                <DialogItem name="Dmitry" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="What are you doing?"/>
                <Message message="Hello!"/>
                <Message message="Hello!"/>
                <Message message="Hello!"/>
            </div>
        </div>
    );
};

export default Dialogs;