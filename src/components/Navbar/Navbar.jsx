import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./NavItem/NavItem";

const Navbar = ({elements}) => {
    const navElements = elements.map(n => <NavItem key={n.id}
                                                   id={n.id}
                                                   image={n.image}
                                                   path={n.path}
                                                   value={n.value}/>)

    return (
        <nav className={classes.navbar}>
            {navElements}
        </nav>
    );
};

export default Navbar;