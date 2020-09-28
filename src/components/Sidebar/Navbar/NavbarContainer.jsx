import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        elements: state.sidebar.elements
    };
};

const mapDispatchToProps = dispatch => {
    return {};
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Navbar);