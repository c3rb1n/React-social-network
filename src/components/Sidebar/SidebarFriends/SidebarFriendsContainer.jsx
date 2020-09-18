import React from "react";
import SidebarFriends from "./SidebarFriends";

const SidebarFriendsContainer = props => {
    let state = props.store.getState().sidebar;

    return <SidebarFriends friends={state.friends}/>;
};

export default SidebarFriendsContainer;