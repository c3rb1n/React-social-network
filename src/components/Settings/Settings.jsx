import React from "react";
import classes from "./Settings.module.scss";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = props => {
    return (
        <div className={classes.settings}>
            <div className={classes.settings__message}>
                <span className={classes.settings__title}>SORRY</span>
                <span>Settings page is under</span>
                <span>construction...</span>
            </div>
            <div>
                <img className={classes.settings__gif}
                     src="https://media.giphy.com/media/LPaBB9d1GegMFC75Qf/giphy.gif" alt="keanu-gif"/>
            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(Settings);