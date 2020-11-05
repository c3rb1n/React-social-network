import React, {useEffect, useState} from "react";
import classes from "./CurrentDate.module.scss";

const CurrentDate = ({date, appendNull}) => {
    const tick = () => {
        const date = new Date();

        setYear(date.getFullYear());
        setMonth(appendNull(date.getMonth() + 1));
        setDay(appendNull(date.getDate()));
    }

    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(appendNull(date.getMonth() + 1));
    const [day, setDay] = useState(appendNull(date.getDate()));

    useEffect(() => {
        const dateID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(dateID);
        };
    });

    return (
        <div className={classes.date}>
            {`${day}.${month}.${year}`}
        </div>
    );
}

export default CurrentDate;
