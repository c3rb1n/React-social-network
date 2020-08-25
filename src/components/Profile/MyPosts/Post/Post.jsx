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
                    src="https://lh3.googleusercontent.com/proxy/p8H3bJnqs-Go1H4ag9gY9BgFmuXkJZwlsXA1UI9I1gUofq_onl3b5l1My4XUxTsddKqPMuFoCTvFrgQ_-WWfYz0_aBvvaog"
                    alt="like"/>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;