import React, {useState} from "react";

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onStatusChange = event => {
        setStatus(event.currentTarget.value);
        props.updateStatus(status);
    };

    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "Введите статус..."}</span>
                </div> :
                <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           autoFocus={true} value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;