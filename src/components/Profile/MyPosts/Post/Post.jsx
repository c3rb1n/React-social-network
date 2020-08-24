import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU"
                alt="user"/>
            Post
            <div>like</div>
        </div>
    );
};

export default Post;