import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    addPost,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    like,
    unlike,
} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;

            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render = () => {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <Profile isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     {...this.props}/>
        );
    };
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        friends: state.profilePage.friends,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
        posts: state.profilePage.posts
    };
};


export default compose(
    connect(mapStateToProps, {getUserProfile, addPost, getStatus,
                              updateStatus, savePhoto, saveProfile,
                              like, unlike}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);