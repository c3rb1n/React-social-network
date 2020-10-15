import React from "react";
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";


const maxLength20 = maxLengthCreator(50);

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "Email", "email", [required, maxLength20])}
            {createField(Input, "password", "Password", "password", [required, maxLength20])}
            {createField(Input, "checkbox", null, "rememberMe", [], {}, "Remember Me")}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField(Input, "text", "", "captcha", [required])}
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
        props.login(values.email, values.password, values.rememberMe, values.captcha);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    };
};

export default connect(mapStateToProps, {login})(Login);