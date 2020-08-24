import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section className={classes.content}>
            <div>
                <img src="https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg" alt="content-img"/>
            </div>
            <div>avatar + description</div>
            <MyPosts/>
        </section>
    );
};

export default Profile;