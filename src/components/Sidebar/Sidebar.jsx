import React from "react";
import classes from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import SidebarFriends from "./SidebarFriends/SidebarFriends";

const Sidebar = props => {
    return (
        <div className={classes.sidebar}>
            <Navbar elements={props.state.elements}/>
            <SidebarFriends friends={props.state.friends}/>
        </div>
    );
};

export default Sidebar;