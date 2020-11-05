import React from "react";
import classes from "./AvatarBlock.module.scss";
import userPhoto from "../../../assets/images/user.svg";
import UploadIcon from "../../common/Icons/UploadIcon/UploadIcon";

const AvatarBlock = ({avatar, isOwner, savePhoto, editMode, setEditMode}) => {
    const photoSelected = event => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    return (
        <div className={classes.avatarBlock}>
            <img className={classes.avatarBlock__avatar}
                 src={avatar || userPhoto}
                 alt="avatar"/>
            {isOwner &&
            <div className={classes.avatarBlock__labelWrapper}>
                <label className={classes.avatarBlock__label} htmlFor="photo-uploader">
                    <div>
                        <UploadIcon/>
                    </div>
                    <div className={classes.avatarBlock__uploadText}>Update photo</div>
                </label>
                <input id="photo-uploader"
                       className={classes.avatarBlock__input}
                       type="file"
                       onChange={photoSelected}/>
            </div>}
            {isOwner && !editMode &&
                <button className={classes.avatarBlock__button}
                        onClick={() => setEditMode(!editMode)}>Edit</button>}
            {isOwner && editMode &&
                <button className={classes.avatarBlock__button}
                        onClick={() => setEditMode(!editMode)}>Return</button>}
        </div>
    );
};

export default AvatarBlock;