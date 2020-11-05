import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import classes from "./Preloader.module.scss";

const Preloader = props => {
    return (
        <div className={classes.preloader}>
            <img className={classes.preloader__img} src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;