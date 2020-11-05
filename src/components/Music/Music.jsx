import React from "react";
import classes from "./Music.module.scss";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = props => {
    return (
        <div className={classes.music}>
            <div className={classes.music__message}>
                <span className={classes.music__title}>SORRY</span>
                <span>Music page is under</span>
                <span>construction...</span>
            </div>
            <div>
                <img className={classes.music__gif}
                     src="https://media.giphy.com/media/LPaBB9d1GegMFC75Qf/giphy.gif" alt="keanu-gif"/>
            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(Music);