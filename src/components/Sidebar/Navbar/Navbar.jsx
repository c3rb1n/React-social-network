import React from "react";
import classes from "./Navbar.module.css";
import NavbarElement from "./NavbarElement/NavbarElement";

const Navbar = props => {
    let navbarElements = props.elements.map(n => <NavbarElement key={n.id} path={n.path} value={n.value}/>);

    return (
        <nav>
            {navbarElements}
        </nav>
    );
};

export default Navbar;