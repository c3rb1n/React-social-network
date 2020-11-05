import React, {useState} from "react";
import classes from "./Profile.module.scss";
import AvatarBlock from "./AvatarBlock/AvatarBlock";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import AddPostPanel from "./AddPostPanel/AddPostPanel";

const Profile = props => {
    const [editMode, setEditMode] = useState(false);
    const [fieldFocus, setFieldFocus] = useState(false);

    const onAddPost = values => {
        props.addPost(values.newPostText);
        values.newPostText = "";
        setFieldFocus(false);
    };

    return (
        <section className={classes.profile}>
            <AvatarBlock avatar={props.profile.photos.large}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         editMode={editMode}
                         setEditMode={setEditMode}/>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                         editMode={editMode}
                         setEditMode={setEditMode}/>
            <FriendsBlock friends={props.friends} isOwner={props.isOwner}/>
            {props.isOwner && <AddPostPanel avatar={props.profile.photos.small}
                                            fieldFocus={fieldFocus}
                                            setFieldFocus={setFieldFocus}
                                            onSubmit={onAddPost}/>}
            <MyPosts isOwner={props.isOwner}
                     posts={props.posts}
                     avatar={props.profile.photos.small}
                     fullName={props.profile.fullName}
                     like={props.like}
                     unlike={props.unlike}/>
        </section>
    );
};

export default Profile;