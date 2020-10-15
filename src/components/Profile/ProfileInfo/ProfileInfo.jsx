import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const photoSelected = event => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    const onSubmit = formData => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img className={classes.photo}
                     src={profile.photos.large || userPhoto}
                     alt="avatar"/>
                {isOwner && <input type="file" onChange={photoSelected}/>}
                {editMode ? <ProfileDataForm initialValues={profile}
                                             profile={profile}
                                             isOwner={isOwner}
                                             onSubmit={onSubmit}/> :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 goToEditMode={() => setEditMode(true)}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
};

export default ProfileInfo;