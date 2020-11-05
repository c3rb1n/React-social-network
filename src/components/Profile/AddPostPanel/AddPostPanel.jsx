import React from "react";
import classes from "./AddPostPanel.module.scss";
import userPhoto from "../../../assets/images/user.svg";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

const AddNewPostsForm = ({avatar, fieldFocus, setFieldFocus, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.addPostPanel}>
            <div className={classes.addPostPanel__top}>
                <img className={classes.addPostPanel__avatar} src={avatar ? avatar : userPhoto} alt="avatar"/>
                <Field className={`${classes.addPostPanel__field} ${fieldFocus && classes.addPostPanel__field_focus}`}
                       onFocus={() => setFieldFocus(true)}
                       onBlur={(e) => !e.currentTarget.value && setFieldFocus(false)}
                       name="newPostText"
                       component={Textarea}
                       placeholder="What's new?"
                       maxLength={665}/>
            </div>
            {fieldFocus &&
            <div className={classes.addPostPanel__bottom}>
                <button className={classes.addPostPanel__btn}>Post</button>
            </div>}
        </form>
    );
};

export default reduxForm({form: "profileAddNewPostForm"})(AddNewPostsForm);