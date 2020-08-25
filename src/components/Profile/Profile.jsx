import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    return (
        <section>
            <div className={classes.content_wallpaper}>
                <img src="https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg" alt="content-wallpaper"/>
            </div>
            <div>avatar + description</div>
            <MyPosts/>
        </section>
    );
};

export default Profile;