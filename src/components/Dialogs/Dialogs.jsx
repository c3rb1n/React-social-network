import React from "react";
import classes from "./Dialogs.module.scss";
import DialogPreview from "./DialogPreview/DialogPreview";
import Dialog from "./Dialog/Dialog";

const Dialogs = ({match, dialogs, sendMessage}) => {
    const userId = match.params.userId;
    const currentDialogData = userId && dialogs.filter((d, index) => index + 1 == userId)[0];

    const dialogsElements = dialogs.map((d, index) =>
        <DialogPreview key={index}
                       id={index + 1}
                       name={d.name}
                       lastMessage={d.messages.length && d.messages[d.messages.length - 1]}/>);

    return (
        <div className={classes.dialogs}>
            {!userId && <div>{dialogsElements}</div>}
            {userId && <Dialog userId={userId}
                               currentDialogData={currentDialogData}
                               sendMessage={sendMessage}/>}
        </div>
    );
};

export default Dialogs;