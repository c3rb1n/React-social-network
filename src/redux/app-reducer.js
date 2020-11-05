import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const PAGE_FOUND = "PAGE_FOUND";
const PAGE_NOT_FOUND = "PAGE_NOT_FOUND";

let initialState = {
    initialized: false,
    isPageFound: true
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case PAGE_FOUND:
            return {
                ...state,
                isPageFound: true
            }
        case PAGE_NOT_FOUND:
            return {
                ...state,
                isPageFound: false
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});
export const pageFound = () => ({
    type: PAGE_FOUND
});
export const pageNotFound = () => ({
    type: PAGE_NOT_FOUND
});

export const initializeApp = () => dispatch => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};

export default appReducer;