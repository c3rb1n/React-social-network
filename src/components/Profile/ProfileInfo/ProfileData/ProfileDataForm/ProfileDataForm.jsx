import React, {useState} from "react";
import classes from "./ProfileDataForm.module.scss";
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    const [checkbox, toggleCheckbox] = useState(profile.lookingForAJob);
    return (
        <form className={classes.profileDataForm} onSubmit={handleSubmit}>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div className={classes.profileDataForm__fullName}>
                <span className={classes.profileDataForm__title}>
                    Full name:
                </span>
                <div className={classes.profileDataForm__input}>
                    {createField(Input, "name", "Add full name...", "fullName", [])}
                </div>
            </div>
            <div className={classes.profileDataForm__lookingForAJob}>
                <span className={classes.profileDataForm__title}>
                    Looking for a job:
                </span>
                {checkbox ?
                    <label className={classes.profileDataForm__lookingForAJob_labelTrue}
                           htmlFor="lookingForAJob-checkbox"
                           onClick={() => toggleCheckbox(!checkbox)}>✔</label> :
                    <label className={classes.profileDataForm__lookingForAJob_labelFalse}
                           htmlFor="lookingForAJob-checkbox"
                           onClick={() => toggleCheckbox(!checkbox)}/>}
                <div className={classes.profileDataForm__checkbox}>
                    {createField(Input,
                        "checkbox",
                        "",
                        "lookingForAJob",
                        [], {id: "lookingForAJob-checkbox"})}
                </div>
            </div>
            <div className={classes.profileDataForm__technicalSkills}>
                Technical skills:
                <div className={classes.profileDataForm__textarea}>
                    {createField(Textarea,
                        "",
                        "Add technical skills...",
                        "lookingForAJobDescription",
                        [], {maxLength: 183})}
                </div>
            </div>
            <div className={classes.profileDataForm__softSkills}>
                Soft skills:
                <div className={classes.profileDataForm__textarea}>
                    {createField(Textarea,
                        "",
                        "Add soft skills...",
                        "aboutMe",
                        [],
                        {maxLength: 204})}
                </div>
            </div>
            <div>
                <div>
                    <div className={classes.profileDataForm__contacts}>
                        Contacts
                    </div>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={classes.profileDataForm__contact}>
                            <span className={classes.profileDataForm__title}>
                                {key[0].toUpperCase() + key.slice(1)}:
                            </span>
                                <div className={classes.profileDataForm__input}>
                                    {createField(Input, "text", `Add ${key}...`, `contacts.${key}`, [])}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={classes.profileDataForm__submit}>
                <button className={classes.profileDataForm__btn}>Save</button>
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)

export default ProfileDataReduxForm;