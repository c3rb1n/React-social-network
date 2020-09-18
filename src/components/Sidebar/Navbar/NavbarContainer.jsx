import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = props => {
    let state = props.store.getState().sidebar;

    return <Navbar elements={state.elements}/>;
};

export default NavbarContainer;