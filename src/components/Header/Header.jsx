import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const Header = props => {

    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <NavLink to={"/profile"}>
                        <img src={props.profile.photos.small ?
                            props.profile.photos.small :
                            userPhoto} alt="avatar"/>
                        <span className={classes.login}>
                            {props.login}
                        </span>
                        <button onClick={props.logout}>Log out</button>
                    </NavLink> :
                    <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;