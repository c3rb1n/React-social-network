import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        elements: state.sidebar.elements
    };
};

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);