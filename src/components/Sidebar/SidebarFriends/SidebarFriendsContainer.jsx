import React from "react";
import SidebarFriends from "./SidebarFriends";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        friends: state.sidebar.friends
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SidebarFriends);