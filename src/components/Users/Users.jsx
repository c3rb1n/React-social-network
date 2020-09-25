import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import {toggleFollowingProgress} from "../../redux/usersPage-reducer";

const Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return <button key={p.id}
                                   className={props.currentPage === p && classes.selectedPage}
                                   onClick={() => props.onPageChanged(p)}>{p}</button>
                })}
            </div>
            <div>
                {props.users.map(u => <User key={u.id}
                                            name={u.name}
                                            id={u.id}
                                            photo={u.photos.small}
                                            status={u.status}
                                            followed={u.followed}
                                            followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                            toggleFollowingProgress={props.toggleFollowingProgress}/>)}
            </div>
        </div>
    );
};

export default Users;