import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./SidebarFriends.module.css"
import SidebarFriend from "./SidebarFriend/SidebarFriend";

const SidebarFriends = props => {
    let sidebarFriendsElements = props.friends.map(f => <SidebarFriend key={f.id} name={f.name} id={f.id}/>);

    return (
        <div className={classes.sidebarFriends}>
            <div className={classes.title}>
                <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className={classes.items}>
                {sidebarFriendsElements}
            </div>
        </div>
    );
};

export default SidebarFriends;