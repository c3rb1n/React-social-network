import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    dialogsPage: dialogsPageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;