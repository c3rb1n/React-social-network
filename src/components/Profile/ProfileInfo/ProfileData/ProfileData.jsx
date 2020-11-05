import classes from "./ProfileData.module.scss";
import React from "react";
import Contact from "./Contact/Contact";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileData = ({profile, status, isOwner, updateStatus}) => {
    return (
        <div className={classes.profileData}>
            <div className={classes.profileData__heading}>
                <span className={classes.profileData__fullName}>{profile.fullName}</span>
                <div className={classes.profileData__lookingForAJob}>
                    Looking for a job: {profile.lookingForAJob ?
                    <span className={classes.profileData__yes}>Yes</span> :
                    <span className={classes.profileData__no}>No</span>}
                </div>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <div className={classes.profileData__personalInformation}>
                <span className={classes.profileData__mainTitle}>
                    Personal information
                </span>
                <div className={classes.profileData__technicalSkills}>
                    <div className={classes.profileData__technicalSkillsTitle}>
                        Technical skills:
                    </div>
                    <div className={classes.profileData__technicalSkillsDescription}>
                        {profile.lookingForAJobDescription ? profile.lookingForAJobDescription :
                                                             "Add your technical skills..."}
                    </div>
                </div>
                <div className={classes.profileData__softSkills}>
                    <div className={classes.profileData__softSkillsTitle}>
                        Soft skills:
                    </div>
                    <div className={classes.profileData__softSkillsDescription}>
                        {profile.aboutMe ? profile.aboutMe : "Add your soft skills..."}
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.profileData__mainTitle}>
                    Contacts
                </div> {Object.keys(profile.contacts).map(key => <Contact key={key}
                                                                           contactTitle={key}
                                                                           contactValue={profile.contacts[key]}/>)}
            </div>
        </div>
    );
};

export default ProfileData;