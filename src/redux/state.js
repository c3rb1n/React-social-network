let rerenderEntireTree = () => {
    console.log("State was changed.")
}

let state = {
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
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Ilya",
                newMessageText: ""
            },
            {
                id: 2,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Vitaly",
                newMessageText: ""
            },
            {
                id: 3,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Sergey",
                newMessageText: ""
            },
            {
                id: 4,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Svyatoslav",
                newMessageText: ""
            },
            {
                id: 5,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Alexander",
                newMessageText: ""
            },
            {
                id: 6,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Dmitry",
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
};

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText, id) => {
    let messages = state.dialogsPage.messages;
    let messagesIndex = id - 1;

    for (let i = 0; i < messages.length; i++) {
        if (i === messagesIndex) {
            messages[messagesIndex].newMessageText = newText;
            rerenderEntireTree(state);
        }
    }
};

export const sendMessage = (id) => {
    let messages = state.dialogsPage.messages;
    let messagesIndex = id - 1;

    for (let i = 0; i < messages.length; i++) {
        if (i === messagesIndex) {
            let newMessage = messages[messagesIndex].newMessageText;
            messages[messagesIndex].messages.push(newMessage);
            messages[messagesIndex].newMessageText = "";
            rerenderEntireTree(state);
        }
    }
};

export const subscribe = observer => {
    rerenderEntireTree = observer;
};

export default state;