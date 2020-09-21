import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";


const Users = props => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    let usersElements = props.users.map(u => <User key={u.id}
                                                   name={u.name}
                                                   id={u.id}
                                                   photo={u.photos.small}
                                                   status={u.status}
                                                   followed={u.followed}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}/>);

    return (
        <div>
            {usersElements}
        </div>
    );
};

export default Users;