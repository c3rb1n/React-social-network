import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to="/dialogs/1">Ilya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Vitaly</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Svyatoslav</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Alexander</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Dmitry</NavLink>
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