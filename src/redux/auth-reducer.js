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
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (profile, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {
        profile,
        email,
        login
    }
});

export const getAuthUserData = () => dispatch => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;

            profileAPI.getProfile(id).then(data => {
                dispatch(setAuthUserData(data, email, login));
            });
        }
    });
}
export default authReducer;