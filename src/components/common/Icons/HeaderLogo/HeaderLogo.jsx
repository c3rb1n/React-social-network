import React from "react";
import classes from "./HeaderLogo.module.scss";
import {NavLink} from "react-router-dom";

const HeaderLogo = props => {
    return (
        <NavLink to="/profile" >
            <svg display="none">
                <symbol id="headerLogo" viewBox="0 0 96 96">
                    <g id="surface9210862">
                        <path d="M 48 68 C 22.199219 68 2 59.199219 2 48 C 2 36.800781 22.199219 28 48 28 C 73.800781 28 94 36.800781 94 48 C 94 59.199219 73.800781 68 48 68 Z M 48 32 C 22.800781 32 6 40.199219 6 48 C 6 55.800781 22.800781 64 48 64 C 73.199219 64 90 55.800781 90 48 C 90 40.199219 73.199219 32 48 32 Z M 48 32 "/>
                        <path d="M 30.199219 89.199219 C 28.199219 89.199219 26.601562 88.800781 25 87.800781 C 15.199219 82.199219 17.800781 60.398438 30.601562 38 C 36.601562 27.601562 44 18.800781 51.199219 13.199219 C 59 7.199219 66 5.398438 70.800781 8.199219 C 75.800781 11 77.601562 18 76.398438 27.800781 C 75.199219 37 71.199219 47.800781 65.199219 58.199219 C 59.199219 68.601562 51.800781 77.398438 44.601562 83 C 39.398438 87 34.398438 89.199219 30.199219 89.199219 Z M 65.800781 10.800781 C 62.601562 10.800781 58.398438 12.601562 53.800781 16.199219 C 47 21.601562 40 30 34.199219 40 C 21.601562 61.800781 20.398438 80.601562 27 84.398438 C 30.398438 86.398438 36 84.601562 42.199219 79.800781 C 49 74.398438 56 66 61.800781 56 C 67.601562 46 71.398438 35.800781 72.601562 27.199219 C 73.601562 19.199219 72.398438 13.601562 69 11.601562 C 68 11.199219 67 10.800781 65.800781 10.800781 Z M 65.800781 10.800781 "/>
                        <path d="M 66 89.199219 C 56 89.199219 41.601562 77 30.800781 58 C 17.800781 35.601562 15.199219 13.800781 25 8.199219 C 34.800781 2.601562 52.398438 15.601562 65.398438 38 C 71.398438 48.398438 75.398438 59.199219 76.601562 68.398438 C 78 78.199219 76 85 71 88 C 69.398438 88.800781 67.800781 89.199219 66 89.199219 Z M 27 11.601562 C 20.398438 15.398438 21.601562 34.199219 34.199219 56 C 46.800781 77.800781 62.398438 88.199219 69 84.398438 C 72.398438 82.398438 73.601562 76.800781 72.601562 68.800781 C 71.398438 60.199219 67.601562 50 61.800781 40 C 49.199219 18.199219 33.601562 7.800781 27 11.601562 Z M 27 11.601562 "/>
                        <path d="M 56 48 C 56 52.417969 52.417969 56 48 56 C 43.582031 56 40 52.417969 40 48 C 40 43.582031 43.582031 40 48 40 C 52.417969 40 56 43.582031 56 48 Z M 56 48 "/>
                    </g>
                </symbol>
            </svg>
            <svg className={classes.logo}>
                <use href="#headerLogo"/>
            </svg>
        </NavLink>
    );
};

export default HeaderLogo;