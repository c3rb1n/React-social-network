import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostsForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component={Textarea}
                       validate={[required, maxLength10]}
                       placeholder="Post message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

AddNewPostsForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostsForm);

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post key={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}/>);

    let onAddPost = values => {
        props.addPost(values.newPostText);

    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostsForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;