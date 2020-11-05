import React from "react";
import classes from "./ProfileInfo.module.scss";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile, editMode, setEditMode}) => {

    const onSubmit = formData => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div className={classes.profileInfo}>
            {editMode ? <ProfileDataForm initialValues={profile}
                                         profile={profile}
                                         isOwner={isOwner}
                                         onSubmit={onSubmit}/> :
                <ProfileData profile={profile}
                             status={status}
                             isOwner={isOwner}
                             updateStatus={updateStatus}/>}
        </div>
    );
};

export default ProfileInfo;