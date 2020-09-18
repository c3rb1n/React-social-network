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
    let messages = state.messages;
    let messagesIndex = action.id - 1;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            for (let i = 0; i < messages.length; i++) {
                if (i === messagesIndex) {
                    messages[messagesIndex].newMessageText = action.newText;
                }
            }
            return state;
        case SEND_MESSAGE:
            for (let i = 0; i < messages.length; i++) {
                if (i === messagesIndex) {
                    let newMessage = {
                        id: 7,
                        message: messages[messagesIndex].newMessageText
                    };
                    messages[messagesIndex].messages.push(newMessage);
                    messages[messagesIndex].newMessageText = "";
                }
            }
            return state;
        default:
            return state;
    }
};

export const updateNewMessageTextActionCreator = (newText, id) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText,
    id
});
export const sendMessageActionCreator = id => ({
    type: SEND_MESSAGE,
    id
});

export default dialogsPageReducer;