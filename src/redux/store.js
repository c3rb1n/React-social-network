import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post.", likesCount: 20},
                {id: 3, message: "Hi!", likesCount: 45},
                {id: 4, message: "Hello!", likesCount: 8}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ilya"},
                {id: 2, name: "Vitaly"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Svyatoslav"},
                {id: 5, name: "Alexander"},
                {id: 6, name: "Dmitry"}
            ],
            messages: [
                {
                    id: 1,
                    name: "Ilya",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                },
                {
                    id: 2,
                    name: "Vitaly",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                },
                {
                    id: 3,
                    name: "Sergey",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                },
                {
                    id: 4,
                    name: "Svyatoslav",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                },
                {
                    id: 5,
                    name: "Alexander",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                },
                {
                    id: 6,
                    name: "Dmitry",
                    messages: [
                        {id: 1, message: "Hi!"},
                        {id: 2, message: "How are you?"},
                        {id: 3, message: "What are you doing?"},
                        {id: 4, message: "Hello!"},
                        {id: 5, message: "Hello!"},
                        {id: 6, message: "Hello!"},
                    ],
                    newMessageText: ""
                }
            ]
        },
        sidebar: {
            elements: [
                {id: 1, path: "/profile", value: "Profile"},
                {id: 2, path: "/dialogs", value: "Messages"},
                {id: 3, path: "/news", value: "News"},
                {id: 4, path: "/music", value: "Music"},
                {id: 5, path: "/settings", value: "Settings"},
            ],
            friends: [
                {id: 1, name: "Ilya"},
                {id: 2, name: "Vitaly"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Svyatoslav"},
                {id: 5, name: "Alexander"},
                {id: 6, name: "Dmitry"}
            ]
        }
    },
    _callSubscriber() {
        console.log("State was changed.");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;