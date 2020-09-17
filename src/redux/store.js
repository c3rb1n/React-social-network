const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

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
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            let messages = this._state.dialogsPage.messages;
            let messagesIndex = action.id - 1;

            for (let i = 0; i < messages.length; i++) {
                if (i === messagesIndex) {
                    messages[messagesIndex].newMessageText = action.newText;
                    this._callSubscriber(this._state);
                }
            }
        } else if (action.type === SEND_MESSAGE) {
            let messages = this._state.dialogsPage.messages;
            let messagesIndex = action.id - 1;

            for (let i = 0; i < messages.length; i++) {
                if (i === messagesIndex) {
                    let newMessage = {
                        id: 7,
                        message: messages[messagesIndex].newMessageText
                    };
                    messages[messagesIndex].messages.push(newMessage);
                    messages[messagesIndex].newMessageText = "";
                    this._callSubscriber(this._state);
                }
            }
        }
    }
};

export const updateNewPostTextActionCreator = newText => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewMessageTextActionCreator = (newText, id) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText,
    id
});

export const sendMessageActionCreator = id => ({
    type: SEND_MESSAGE,
    id
});

export default store;