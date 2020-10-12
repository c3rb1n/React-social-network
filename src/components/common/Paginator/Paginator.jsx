import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.pages}>
            {pages.map(p => {
                return <button key={p.id}
                               className={currentPage === p && classes.selectedPage}
                               onClick={() => onPageChanged(p)}>{p}</button>
            })}
        </div>

    );
};

export default Paginator;