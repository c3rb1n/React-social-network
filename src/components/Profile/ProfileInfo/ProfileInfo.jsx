import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <div>
                        {props.profile.photos.large ?
                            <img src={props.profile.photos.large} alt="avatar"/> :
                            <img className={classes.altPhoto} src={userPhoto} alt="avatar"/>}
                    </div>
                    <div className={classes.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={classes.aboutMe}>
                        {props.profile.aboutMe}
                    </div>
                    <ProfileStatus status={props.status}/>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.title}>
                        CONTACTS:
                    </div>
                    <div>
                        <a href={props.profile.contacts.facebook}
                           target="_blank">Facebook</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.website}
                           target="_blank">Website</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.vk}
                           target="_blank">VK</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.twitter}
                           target="_blank">Twitter</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.instagram}
                           target="_blank">Instagram</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.youtube}
                           target="_blank">Youtube</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.github}
                           target="_blank">Github</a>
                    </div>
                    <div>
                        <a href={props.profile.contacts.mainLink}
                           target="_blank">Main Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;