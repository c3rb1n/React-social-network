import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
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

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer);