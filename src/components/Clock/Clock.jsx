import React from "react";
import classes from "./Clock.module.scss";
import CurrentTime from "./CurrentTime/CurrentTime";
import CurrentDate from "./CurrentDate/CurrentDate";

const Clock = props => {
    const date = new Date();
    const appendNull = element => element < 10 ? `0${element}` : element;

    return (
        <div className={classes.clock}>
            <CurrentTime date={date}
                         appendNull={appendNull}/>
            <CurrentDate date={date}
                         appendNull={appendNull}/>
        </div>
    );
}

export default Clock;