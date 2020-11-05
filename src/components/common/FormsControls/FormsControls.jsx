import React from "react";
import classes from "./FormsControls.module.scss";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={`${classes.formControl} ${hasError && classes.error}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = props => {
    const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    );
};

export const Input = props => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (component, type, placeholder, name, validators, props = {}) => (
    <div>
        <Field component={component}
               type={type}
               placeholder={placeholder}
               name={name}
               validate={validators}
               {...props}/>
    </div>
);