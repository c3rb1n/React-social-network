import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;

                profileAPI.getProfile(id).then(data => {
                    this.props.setAuthUserData(data, email, login);
                });
            }
        });
    };

    render = () => {
        return (
            <Header {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    return {
        profile: state.auth.profile,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);