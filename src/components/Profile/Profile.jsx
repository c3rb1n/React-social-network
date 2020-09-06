import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "It's my first post.", likesCount: "20"},
        {id: 3, message: "Hi!", likesCount: "45"},
        {id: 4, message: "Hello!", likesCount: "8"}
    ];

    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </section>
    );
};

export default Profile;