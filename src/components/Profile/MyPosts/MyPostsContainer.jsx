import React from "react";
import MyPosts from "./MyPosts";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePage-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = props => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profilePage;
                    let updateNewPostText = text => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    let addPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    };

                    return <MyPosts posts={state.posts}
                                    newPostText={state.newPostText}
                                    updateNewPostText={updateNewPostText}
                                    addPost={addPost}/>;
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;