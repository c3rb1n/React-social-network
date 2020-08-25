import React from "react";
import classes from "./Header.module.css";

const Header = props => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="logo"/>
        </header>
    );
};

export default Header;