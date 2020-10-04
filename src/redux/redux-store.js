import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    app: appReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    dialogsPage: dialogsPageReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;