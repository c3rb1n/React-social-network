import React from "react";
import SidebarFriends from "./SidebarFriends";
import StoreContext from "../../../StoreContext";

const SidebarFriendsContainer = props => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().sidebar;

                    return <SidebarFriends friends={state.friends}/>;
                }
            }
        </StoreContext.Consumer>
    );
};

export default SidebarFriendsContainer;