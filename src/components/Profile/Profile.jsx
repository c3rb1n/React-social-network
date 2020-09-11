import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </section>
    );
};

export default Profile;