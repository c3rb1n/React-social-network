import React, {useState} from "react";
import classes from "./Users.module.scss";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged,
                   users, followingInProgress, follow, unfollow}) => {
    const [portionNumber, setPortionNumber] = useState(1);

    return (
        <div className={classes.users}>
            <div className={classes.users__heading}>Users <span>{totalUsersCount}</span></div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionNumber={portionNumber}
                       setPortionNumber={setPortionNumber}/>
            <div>
                {users.map((u, index) => <User key={index}
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
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionNumber={portionNumber}
                       setPortionNumber={setPortionNumber}/>
        </div>
    );
};

export default Users;