import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";

const Users = props => {
    let usersElements = props.users.map(u => <User key={u.id}
                                                   id={u.id}
                                                   photoUrl={u.photoUrl}
                                                   followed={u.followed}
                                                   fullName={u.fullName}
                                                   status={u.status}
                                                   city={u.location.city}
                                                   country={u.location.country}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}/>);

    return (
        <div>
            {usersElements}
        </div>
    );
};

export default Users;