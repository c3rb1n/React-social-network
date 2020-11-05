import React from "react";
import classes from "./News.module.scss";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = props => {
    return (
        <div className={classes.news}>
            <div className={classes.news__message}>
                <span className={classes.news__title}>SORRY</span>
                <span>News page is under</span>
                <span>construction...</span>
            </div>
            <div>
                <img className={classes.news__gif}
                     src="https://media.giphy.com/media/LPaBB9d1GegMFC75Qf/giphy.gif" alt="keanu-gif"/>
            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(News);