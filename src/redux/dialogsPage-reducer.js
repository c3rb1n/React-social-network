const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messages: state.messages.map(m => {
                    if (m.id === action.messageId) {
                        return {
                            ...m,
                            newMessageText: action.newText
                        };
                    }
                    return m;
                })
            };
        }
        case SEND_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.messages[action.messageId - 1].newMessageText
            };

            return {
                ...state,
                messages: state.messages.map(m => {
                    if (m.id === action.messageId) {
                        return {
                            ...m,
                            messages: [...state.messages[action.messageId - 1].messages, newMessage],
                            newMessageText: ""
                        };
                    }
                    return m;
                })
            };
        }
        default:
            return state;
    }
};

export const updateNewMessageTextActionCreator = (newText, messageId) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText,
    messageId
});
export const sendMessageActionCreator = messageId => ({
    type: SEND_MESSAGE,
    messageId
});

export default dialogsPageReducer;