import React from "react";
import SidebarFriends from "./SidebarFriends";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        friends: state.sidebar.friends
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarFriends);

export default SidebarFriendsContainer;