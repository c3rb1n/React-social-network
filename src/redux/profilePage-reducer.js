import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const LIKE = "LIKE";
const UNLIKE = "UNLIKE";

let initialState = {
    profile: null,
    status: "",
    friends: [
        "Tim",
        "Robert",
        "Brendan",
        "Donald",
        "Dan",
        "Linus",
        "Bjarne",
        "Guido",
        "Andrew",
        "Bill"
    ],
    posts: []
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p, index) => index !== action.postId)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        case LIKE:
            return {
                ...state,
                posts: state.posts.map((p, index) => {
                    if (index === action.postId) {
                        p.liked = true;
                        p.likesCount++;
                        return p;
                    } else {
                        return p;
                    }
                })
            };
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map((p, index) => {
                    if (index === action.postId) {
                        p.liked = false;
                        p.likesCount--;
                        return p;
                    } else {
                        return p;
                    }
                })
            };
        default:
            return state;
    }
};

export const setUserProfile = profile => ({
    type: SET_USER_PROFILE,
    profile
});
export const addPost = newPostText => ({
    type: ADD_POST,
    newPostText
});
export const setStatus = status => ({
    type: SET_STATUS,
    status
});
export const deletePost = postId => ({
    type: DELETE_POST,
    postId
});
export const savePhotoSuccess = photos => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});
export const like = postId => ({
    type: LIKE,
    postId
});
export const unlike = postId => ({
    type: UNLIKE,
    postId
});

export const getUserProfile = userId => async dispatch => {
    const data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data));
};
export const getStatus = userId => async dispatch => {
    const data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data));
};
export const updateStatus = status => async dispatch => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = file => async dispatch => {
    const data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = profile => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("editProfile", {_error: data.messages[0].slice(0, 18)}));
        return Promise.reject(data.messages[0].slice(0, 18));
    }
};

export default profilePageReducer;