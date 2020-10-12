import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "react-social-network/auth/SET_USER_DATA";

let initialState = {
    userId: null,
    profile: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, profile, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        profile,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => async dispatch => {
    const getUserData = await authAPI.me();

    if (getUserData.resultCode === 0) {
        let {id, email, login} = getUserData.data;

        const getProfileData = await profileAPI.getProfile(id);

        dispatch(setAuthUserData(getProfileData.userId, getProfileData, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async dispatch => {
    const loginData = await authAPI.login(email, password, rememberMe);

    if (loginData.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";

        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logout = () => async dispatch => {
    const logoutData = await authAPI.logout();

    if (logoutData.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;