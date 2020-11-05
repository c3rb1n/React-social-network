import React from "react";
import classes from "./Paginator.module.scss";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged,
                       portionSize = 10, portionNumber, setPortionNumber}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pages}>
            {portionNumber > 1 &&
                <button className={classes.pages__btn}
                        onClick={() => setPortionNumber(portionNumber - 1)}>{"<"}</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <button className={`${classes.pages__btn} ${currentPage === p && classes.pages__btn_selected}`}
                               key={p}
                               onClick={() => onPageChanged(p)}>{p}</button>
            })}
            {portionCount > portionNumber &&
                <button className={classes.pages__btn}
                        onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>}
        </div>
    );
};

export default Paginator;