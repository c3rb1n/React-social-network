import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavbarElement.module.css"

const NavbarElement = props => {

    return (
        <div className={classes.item}>
            <NavLink to={props.path} activeClassName={classes.active}>{props.value}</NavLink>
        </div>
    );
};

export default NavbarElement;