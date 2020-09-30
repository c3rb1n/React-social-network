import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

let LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       type="email"
                       placeholder="Login"
                       name="login"
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