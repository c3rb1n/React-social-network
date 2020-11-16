import React, {useEffect, useState} from "react";
import classes from "./CurrentTime.module.scss";

const CurrentTime = ({date, appendNull}) => {
    const hoursConverter = hours => hours >= 13 ? hours - 12 : hours;
    const ampmChanger = hours => hours >= 12 ? "PM" : "AM";

    const tick = () => {
        const date = new Date();

        const hours = appendNull(hoursConverter(date.getHours()));
        const minutes = appendNull(date.getMinutes());
        const seconds = appendNull(date.getSeconds());
        const ampm = ampmChanger(date.getHours());

        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setAmpm(ampm);
    };

    const [hours, setHours] = useState(appendNull(hoursConverter(date.getHours())));
    const [minutes, setMinutes] = useState(appendNull(date.getMinutes()));
    const [seconds, setSeconds] = useState(appendNull(date.getSeconds()));
    const [ampm, setAmpm] = useState(ampmChanger(date.getHours()));

    useEffect(() => {
        const timeID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timeID);
        };
    });

    return (
        <div className={classes.time}>
            <span>{`${hours}:${minutes}:${seconds}`}</span>
            <span>{ampm}</span>
        </div>
    );
};

export default CurrentTime;
