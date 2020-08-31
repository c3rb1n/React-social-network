import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {
    return (
        <div>
            <div className={classes.content_wallpaper}>
                <img src="https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg" alt="content-wallpaper"/>
            </div>
            <div className={classes.descriptionBlock}>avatar + description</div>
        </div>
    );
};

export default ProfileInfo;