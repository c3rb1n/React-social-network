import React from "react";
import classes from "./FilledHeart.module.scss";

const FilledHeart = ({id, unlike}) => {
    return (
        <div>
            <svg display="none">
                <symbol id="filledHeart" viewBox="0 0 48 48">
                    <g id="surface6963919">
                        <path d="M 33 6 C 27.210938 6 24 10.179688 24 10.179688 C 24 10.179688 20.789062 6 15 6 C 8.925781 6 4 10.925781 4 17 C 4 25.34375 13.824219 33.425781 16.5625 35.980469 C 19.714844 38.921875 24 42.699219 24 42.699219 C 24 42.699219 28.285156 38.921875 31.4375 35.980469 C 34.175781 33.425781 44 25.34375 44 17 C 44 10.925781 39.074219 6 33 6 Z M 33 6 "/>
                    </g>
                </symbol>
            </svg>
            <svg className={classes.filledHeart} onClick={() => unlike(id)}>
                <use href="#filledHeart"/>
            </svg>
        </div>
    );
};

export default FilledHeart;