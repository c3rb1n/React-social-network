import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "react-social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "react-social-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId: null,
    profile: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, profile, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        profile,
        email,
        login,
        isAuth,
        captchaUrl
    }
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl
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
export const login = (email, password, rememberMe, captcha) => async dispatch => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};
export const getCaptchaUrl = () => async dispatch => {
    const captchaData = await securityAPI.getCaptchaUrl();
    const captchaUrl = captchaData.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const logout = () => async dispatch => {
    const logoutData = await authAPI.logout();

    if (logoutData.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false, null));
    }
};

export default authReducer;