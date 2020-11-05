import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import document from "../../../assets/images/document.svg";

const MyPosts = React.memo(({avatar, fullName, isOwner, posts, like, unlike}) => {
    let postsElements = posts.map((p, index) => <Post key={index}
                                                      id={index}
                                                      avatar={avatar}
                                                      fullName={fullName}
                                                      message={p.message}
                                                      liked={p.liked}
                                                      likesCount={p.likesCount}
                                                      like={like}
                                                      unlike={unlike}/>);
    return (
        <div className={classes.myPosts}>
            <div className={classes.posts}>
                {isOwner && posts.length !== 0 ? postsElements :
                    <div className={classes.empty}>
                        <span className={classes.empty__heading}>
                            No posts yet
                        </span>
                        <div className={classes.empty__content}>
                            <img className={classes.empty__img} src={document} alt="document"/>
                            <span>There are no posts here yet</span>
                        </div>
                    </div>}
            </div>
        </div>
    );
});

export default MyPosts;