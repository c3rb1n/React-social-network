import React from "react";
import classes from "./Sidebar.module.css";
import NavbarContainer from "./Navbar/NavbarContainer";
import SidebarFriendsContainer from "./SidebarFriends/SidebarFriendsContainer";

const Sidebar = props => {
    return (
        <div className={classes.sidebar}>
            <NavbarContainer store={props.store}/>
            <SidebarFriendsContainer store={props.store}/>
        </div>
    );
};

export default Sidebar;