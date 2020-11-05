import React, {useState} from "react";
import classes from "./LoginBlock.module.scss";
import userPhoto from "../../../assets/images/user.svg";
import HeaderPopup from "./HeaderPopup/HeaderPopup";
import ArrowIcon from "../../common/Icons/ArrowIcon/ArrowIcon";

const LoginBlock = ({fullName, photo, logout}) => {
    const [isPopup, setIsPopup] = useState(false);

    const onPopupButton = () => setIsPopup(!isPopup);

    return (
        <div className={classes.loginBlock} onClick={onPopupButton}>
            <span>{fullName.split(" ")[0]}</span>
            <img className={classes.loginBlock__avatar} src={photo ? photo : userPhoto} alt="avatar"/>
            <ArrowIcon isPopup={isPopup}/>
            {isPopup && <HeaderPopup fullName={fullName}
                                     photo={photo}
                                     logout={logout}/>}
        </div>
    );
};

export default LoginBlock;