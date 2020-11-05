import React, {useState} from "react";
import classes from "./Login.module.scss";
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    const [checkbox, toggleCheckbox] = useState(false);

    return (
        <form onSubmit={handleSubmit} className={classes.login__form}>
            {error ?
                <div className={classes.login__formSummaryError}>
                    {error}
                </div> :
                <div className={classes.login__testingData}>
                    <span>Test account data</span>
                    <span>Email: free@samuraijs.com</span>
                    <span>Password: free</span>
                </div>
            }
            <div className={classes.login__email}>
                {createField(Input, "email", "Enter email...", "email", [required])}
            </div>
            <div className={classes.login__password}>
                {createField(Input, "password", "Enter password...", "password", [required])}
            </div>
            <div className={classes.login__checkbox}>
                {checkbox ?
                    <label className={classes.login_labelTrue}
                           htmlFor="login-checkbox"
                           onClick={() => toggleCheckbox(!checkbox)}>✔</label> :
                    <label className={classes.login_labelFalse}
                           htmlFor="login-checkbox"
                           onClick={() => toggleCheckbox(!checkbox)}/>}
                <div>
                    {createField(Input,
                        "checkbox",
                        null,
                        "rememberMe",
                        [],
                        {id: "login-checkbox"})}
                </div>
                <span>Remember me</span>
            </div>
            <div className={classes.login__captcha}>
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField(Input, "text", "Enter captcha...", "captcha", [required])}
            </div>
            <button className={classes.login__login}>LOGIN</button>
        </form>
    );
};

LoginForm = reduxForm({form: "login"})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = values => {
        login(values.email, values.password, values.rememberMe, values.captcha);
        values.captcha = "";
    }

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.login}>
                <h1 className={classes.login__header}>Login</h1>
                <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
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