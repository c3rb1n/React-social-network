import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateNewPostText, addPost, getUserStatus} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);

        if (!this.props.status) {
            this.props.getUserStatus(userId);
        }
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
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status
    };
};


export default compose(
    connect(mapStateToProps, {getUserProfile, updateNewPostText, addPost, getUserStatus}),
    withRouter
)(ProfileContainer);