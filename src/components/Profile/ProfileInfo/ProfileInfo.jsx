import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <div>
                        {profile.photos.large ?
                            <img src={profile.photos.large} alt="avatar"/> :
                            <img className={classes.altPhoto} src={userPhoto} alt="avatar"/>}
                    </div>
                    <div className={classes.fullName}>
                        {profile.fullName}
                    </div>
                    <div className={classes.aboutMe}>
                        {profile.aboutMe}
                    </div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.title}>
                        CONTACTS:
                    </div>
                    <div>
                        <a href={profile.contacts.facebook}
                           target="_blank">Facebook</a>
                    </div>
                    <div>
                        <a href={profile.contacts.website}
                           target="_blank">Website</a>
                    </div>
                    <div>
                        <a href={profile.contacts.vk}
                           target="_blank">VK</a>
                    </div>
                    <div>
                        <a href={profile.contacts.twitter}
                           target="_blank">Twitter</a>
                    </div>
                    <div>
                        <a href={profile.contacts.instagram}
                           target="_blank">Instagram</a>
                    </div>
                    <div>
                        <a href={profile.contacts.youtube}
                           target="_blank">Youtube</a>
                    </div>
                    <div>
                        <a href={profile.contacts.github}
                           target="_blank">Github</a>
                    </div>
                    <div>
                        <a href={profile.contacts.mainLink}
                           target="_blank">Main Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;