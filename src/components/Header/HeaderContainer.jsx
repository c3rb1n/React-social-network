import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        profile: state.auth.profile,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {logout}),
)(Header);