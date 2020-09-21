import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return (
            <div>
                {this.props.users.map(u => <User key={u.id}
                                                 name={u.name}
                                                 id={u.id}
                                                 photo={u.photos.small}
                                                 status={u.status}
                                                 followed={u.followed}
                                                 follow={this.props.follow}
                                                 unfollow={this.props.unfollow}/>)}
            </div>
        )
    }
}

export default Users;