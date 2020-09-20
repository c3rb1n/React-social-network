import React from "react";
import MyPosts from "./MyPosts";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);