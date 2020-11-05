import React from "react";
import classes from "./AddMessageForm.module.scss";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field className={classes.form__textarea}
                   component={Textarea}
                   name="newMessageText"
                   validate={[]}
                   placeholder="Write a message..."/>
            <button className={classes.form__btn}>Send</button>
        </form>
    );
};

export default reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);