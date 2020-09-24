import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, updateNewPostText, addPost} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    };

    render = () => {
        return (
            <Profile {...this.props}/>
        )
    };
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

export default connect(mapStateToProps, {
    setUserProfile,
    updateNewPostText,
    addPost
})(withRouter(ProfileContainer));