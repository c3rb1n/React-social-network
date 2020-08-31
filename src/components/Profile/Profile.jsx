import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    );
};

export default Profile;