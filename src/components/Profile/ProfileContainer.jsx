import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile, updateNewPostText, addPost} from "../../redux/profilePage-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
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
})(ProfileContainer);