import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <section className={classes.content}>
            <div>
                <img src="https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg" alt="content-img"/>
            </div>
            <div>avatar + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post1</div>
                    <div className={classes.item}>Post2</div>
                </div>
            </div>
        </section>
    );
};

export default Profile;