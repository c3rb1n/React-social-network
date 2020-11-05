import React from "react";
import classes from "./HeaderPopup.module.scss";
import userPhoto from "../../../../assets/images/user.svg";

const HeaderPopup = ({fullName, photo, logout}) => {
    return (
        <div>
            <div className={classes.triangle}/>
            <div className={classes.popup}>
                <div className={classes.popup__userInfo}>
                    <img className={classes.popup__avatar} src={photo ? photo : userPhoto} alt="avatar"/>
                    <span className={classes.popup__fullName}>{fullName}</span>
                </div>
                <button className={classes.popup__logout} onClick={logout}>Log out</button>
            </div>
        </div>
    );
};

export default HeaderPopup;