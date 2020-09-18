import React from "react";
import MyPosts from "./MyPosts";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePage-reducer";

const MyPostsContainer = props => {
    let state = props.store.getState().profilePage;

    let updateNewPostText = text => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    return <MyPosts posts={state.posts}
                    newPostText={state.newPostText}
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}/>;
};

export default MyPostsContainer;