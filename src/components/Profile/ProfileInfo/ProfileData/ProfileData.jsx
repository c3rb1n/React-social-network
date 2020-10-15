import classes from "./ProfileData.module.css";
import React from "react";
import Contact from "./Contact/Contact";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div className={classes.fullName}>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
            <div className={classes.aboutMe}>
                <b>About Me</b>: {profile.aboutMe}
            </div>
            <div>
                <div className={classes.title}>
                    <b>CONTACTS</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    );
};

export default ProfileData;