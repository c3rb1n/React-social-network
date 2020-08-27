import React from "react";
import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoWjd80wBWItgh9qjgAjpbtq3XEdgmBwBAMmFdNzMYG1Rq2nUe&usqp=CAU"
                alt="user"/>
            {props.message}
            <div className={classes.like}>
                <img
                    src="https://www.freeiconspng.com/thumbs/heart-png/heart-png-8.png"
                    alt="like"/>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;