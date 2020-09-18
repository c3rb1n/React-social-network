import React from "react";
import classes from "./Navbar.module.css";
import NavbarElement from "./NavbarElement/NavbarElement";

const Navbar = props => {
    let navbarElements = props.elements.map(e => <NavbarElement path={e.path} value={e.value}/>);

    return (
        <nav>
            {navbarElements}
        </nav>
    );
};

export default Navbar;