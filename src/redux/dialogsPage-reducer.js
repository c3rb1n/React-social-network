const SEND_MESSAGE = "SEND_MESSAGE";

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
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What are you doing?"},
        {id: 4, message: "Hello!"},
        {id: 5, message: "Hello!"},
        {id: 6, message: "Hello!"},
    ]
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.newMessageText
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export const sendMessage = newMessageText => ({
    type: SEND_MESSAGE,
    newMessageText
});

export default dialogsPageReducer;