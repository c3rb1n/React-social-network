import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "It's my first post.", likesCount: "20"},
        {id: 3, message: "Hi!", likesCount: "45"},
        {id: 4, message: "Hello!", likesCount: "8"}
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;