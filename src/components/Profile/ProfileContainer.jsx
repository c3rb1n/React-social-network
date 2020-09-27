import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateNewPostText, addPost} from "../../redux/profilePage-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    };

    render = () => {
        if (!this.props.isAuth) return <Redirect to="/login"/>;

        return (
            <Profile {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {
    getUserProfile,
    updateNewPostText,
    addPost
})(withRouter(ProfileContainer));