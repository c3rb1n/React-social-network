import React from "react";
import classes from "./Post.module.scss";
import userPhoto from "../../../../assets/images/user.svg";
import FilledHeart from "../../../common/Icons/FilledHeart/FilledHeart";
import EmptyHeart from "../../../common/Icons/EmptyHeart/EmptyHeart";

const Post = ({id, avatar, fullName, message, liked, likesCount, like, unlike}) => {

    return (
        <div className={classes.post}>
            <div className={classes.post__user}>
                <img className={classes.post__avatar}
                     src={avatar !== null ? avatar : userPhoto}
                     alt="avatar"/>
                <span>{fullName}</span>
            </div>
            <div className={classes.post__text}>{message}</div>
            <div className={classes.post__like}>
                {liked ? <FilledHeart unlike={unlike} id={id}/> : <EmptyHeart like={like} id={id}/>}
                <span className={classes.post__likesCount}>{likesCount}</span>
            </div>
        </div>
    );
};

export default Post;