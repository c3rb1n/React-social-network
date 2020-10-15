import React from "react";
import classes from "./ProfileDataForm.module.css";
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {isOwner && <div>
                <button>Save</button>
            </div>}
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div className={classes.fullName}>
                <b>Full name</b>:
                {createField(Input, "name", "Full name", "fullName", [])}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField(Input, "checkbox", "", "lookingForAJob", [])}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField(Textarea, "", "My professional skills", "lookingForAJobDescription", [])}
            </div>
            <div className={classes.aboutMe}>
                <b>About Me</b>:
                {createField(Textarea, "", "About Me", "aboutMe", [])}
            </div>
            <div>
                <div className={classes.title}>
                    <b>CONTACTS</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={classes.contact}>
                            <b>{key}</b>: {createField(Input, "text", key, `contacts.${key}`, [])}
                        </div>
                    );
                })}
                </div>
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)

export default ProfileDataReduxForm;