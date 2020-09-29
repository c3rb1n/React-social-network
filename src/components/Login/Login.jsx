import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="email" placeholder="Login" name="login" component="input"/>
            </div>
            <div>
                <Field type="password" placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/> Remember Me
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
        console.log(values);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;