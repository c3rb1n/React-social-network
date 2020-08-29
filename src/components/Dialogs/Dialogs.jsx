import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Ilya
                </div>
                <div className={classes.dialog}>
                    Vitaly
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Svyatoslav
                </div>
                <div className={classes.dialog}>
                    Alexander
                </div>
                <div className={classes.dialog}>
                    Dmitry
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>What are you doing?</div>
            </div>
        </div>
    );
};

export default Dialogs;