const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsPageReducer = (state, action) => {
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