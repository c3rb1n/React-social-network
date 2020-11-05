const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
    dialogs: [
        {name: "Tim", messages: ["Hi! Let's take a look at your html tags."]},
        {name: "Robert", messages: ["Hello, my name is Robert. Do you have a minute to talk about the WWW?"]},
        {name: "Brendan", messages: ["JavaScript is awesome!"]},
        {name: "Donald", messages: ["Let's test your knowledge of algorithms."]},
        {name: "Guido", messages: ["🐍"]},
        {name: "Mark", messages: ["Oh, hi! Do you like React?"]},
        {name: "Linus", messages: ["Want to travel all over the world and speak at a bunch of different conferences - just write Linux."]},
        {name: "Andrew", messages: ["Please tell the guy above that Linux is outdated."]}
    ]
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.map((d, index) => {
                    if (index === action.dialogId) {
                        return {
                            ...d,
                            messages: [...d.messages, action.newMessageText]
                        }
                    } else {
                        return d;
                    }
                })
            }
        default:
            return state;
    }
};

export const sendMessage = (newMessageText, dialogId) => ({
    type: SEND_MESSAGE,
    newMessageText,
    dialogId
});

export default dialogsPageReducer;