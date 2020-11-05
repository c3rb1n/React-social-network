import React, {useEffect, useState} from "react";
import classes from "./ProfileStatus.module.scss";

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const onSaveStatus = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = event => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div className={classes.profileStatus}>
            {props.isOwner ? !editMode ?
                <span className={classes.profileStatus__myStatus} onClick={activateEditMode}>
                        {props.status || "Add a status..."}
                </span> :
                <div className={classes.profileStatus__editMode}>
                    <input className={classes.profileStatus__input}
                           onChange={onStatusChange}
                           value={status}/>
                    <button className={classes.profileStatus__btn} onClick={onSaveStatus}>
                        Save
                    </button>
                </div> :
                <span className={classes.profileStatus__otherUserStatus}>
                    {props.status || "Add a status..."}
                </span>
            }
        </div>
    );
};

export default ProfileStatus;