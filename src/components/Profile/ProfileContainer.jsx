import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, addPost, getStatus, updateStatus} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;

            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    render = () => {
        return (
            <Profile {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};


export default compose(
    connect(mapStateToProps, {getUserProfile, addPost, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);