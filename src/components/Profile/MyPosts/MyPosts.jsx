import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePage-reducer";


const MyPosts = props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onPostChange = event => {
        let text = event.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;