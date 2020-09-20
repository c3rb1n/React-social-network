import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";

let reducers = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    dialogsPage: dialogsPageReducer
})

let store = createStore(reducers);

export default store;