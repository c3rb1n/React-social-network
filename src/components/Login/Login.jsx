import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, createField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";


const maxLength20 = maxLengthCreator(50);

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "Email", "email", [required, maxLength20])}
            {createField(Input, "password", "Password", "password", [required, maxLength20])}
            {createField(Input, "checkbox", null, "rememberMe", [], {},"Remember Me")}

            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({form: "login"})(LoginForm);

const Login = props => {
    const onSubmit = values => {
        props.login(values.email, values.password, values.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {login})(Login);