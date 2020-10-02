import {authAPI, profileAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_USER_DATA";

let initialState = {
    profile: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export const setAuthUserData = (profile, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        profile,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => dispatch => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;

            profileAPI.getProfile(id).then(data => {
                dispatch(setAuthUserData(data, email, login, true));
            });
        }
    });
};

export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        }
    );
};

export const logout = () => dispatch => {
    authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    );
};

export default authReducer;