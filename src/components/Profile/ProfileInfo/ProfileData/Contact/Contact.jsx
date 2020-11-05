import classes from "./Contact.module.scss";
import React from "react";

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>
            <div className={classes.contact__title}>{contactTitle[0].toUpperCase() + contactTitle.slice(1)}:</div>
            {contactValue ?
                <a className={classes.contact__link} href={contactValue}
                   target="_blank"
                   rel="noopener noreferrer">{
                       contactValue.length >= 35 ? `${contactValue.slice(0, 35)}...` : contactValue}</a> :
                <span className={classes.contact__alternateText}>{`Add a ${contactTitle} link...`}</span>}
        </div>

    );
};

export default Contact;