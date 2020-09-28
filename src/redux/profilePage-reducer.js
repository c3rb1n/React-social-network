import {profileAPI} from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";

let initialState = {
    profile: null,
    status: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 20},
        {id: 3, message: "Hi!", likesCount: 45},
        {id: 4, message: "Hello!", likesCount: 8}
    ],
    newPostText: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const setUserProfile = profile => ({
    type: SET_USER_PROFILE,
    profile
});
export const updateNewPostText = newText => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});
export const addPost = () => ({
    type: ADD_POST
});
export const setStatus = status => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};
export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
};
export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profilePageReducer;