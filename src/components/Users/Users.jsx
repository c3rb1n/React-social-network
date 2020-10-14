import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = ({
                   totalUsersCount, pageSize, currentPage,
                   onPageChanged, users, followingInProgress,
                   follow, unfollow, ...props
               }) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {users.map(u => <User key={u.id}
                                      name={u.name}
                                      id={u.id}
                                      photo={u.photos.small}
                                      status={u.status}
                                      followed={u.followed}
                                      followingInProgress={followingInProgress}
                                      follow={follow}
                                      unfollow={unfollow}
                />)}
            </div>
        </div>
    );
};

export default Users;