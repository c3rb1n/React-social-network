import React from "react";
import classes from "./FriendsBlock.module.scss";
import Friend from "./Friend/Friend";

const FriendsBlock = ({friends, isOwner}) => {
    let friendsElementsChecked = [];

    for (let i = 0; i < 6; i++) {
        friendsElementsChecked.push(friends[i]);
    }

    const friendsElements = friendsElementsChecked.map((f, index) => <Friend key={index}
                                                                                     photo={null}
                                                                                     firstName={f}/>)

    return (
        <div className={classes.friends}>
            <div className={classes.friends__heading}>
                <span>Friends</span>
                <span>{isOwner ? friends.length : 0}</span>
            </div>
            {isOwner ?
                <div className={classes.friends__items}>
                    {friendsElements}
                </div> :
                <span className={classes.friends__text}>You have no friends yet</span>
            }
        </div>
    );
};

export default FriendsBlock;