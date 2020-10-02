import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const maxLength20 = maxLengthCreator(50);

let LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       type="email"
                       placeholder="Email"
                       name="email"
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component={Input}
                       type="password"
                       placeholder="Password"
                       name="password"
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component="input"
                       type="checkbox"
                       name="rememberMe"/> Remember Me
            </div>
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