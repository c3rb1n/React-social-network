import React from "react";

const ProfileIcon = props => {
    return (
        <div>
            <svg display="none">
                <symbol id="profileIcon" viewBox="0 0 48 48">
                    <g id="surface11151307">
                        <path d="M 24 4.199219 L 2 24 L 8 24 L 8 42 L 20 42 L 20 30 L 28 30 L 28 42 L 40 42 L 40 24 L 46 24 Z M 24 4.199219 "/>
                    </g>
                </symbol>
            </svg>
            <svg>
                <use href="#profileIcon"/>
            </svg>
        </div>
    );
};

export default ProfileIcon;