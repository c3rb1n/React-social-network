import React from "react";
import classes from "./NavItem.module.scss";
import {NavLink} from "react-router-dom";
import {getIconSelector} from "../../../redux/navbar-selectors";

const NavItem = ({id, path, value}) => {
    return (
        <NavLink to={path} className={classes.navItem}>
            <div className={classes.navItem__icon}>
                {getIconSelector(id)}
            </div>
            <span className={classes.navItem__text}>{value}</span>
        </NavLink>
    );
};

export default NavItem;