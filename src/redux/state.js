let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "15"},
            {id: 2, message: "It's my first post.", likesCount: "20"},
            {id: 3, message: "Hi!", likesCount: "45"},
            {id: 4, message: "Hello!", likesCount: "8"}
        ]
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
                name: "Ilya"
            },
            {
                id: 2,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Vitaly"
            },
            {
                id: 3,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Sergey"
            },
            {
                id: 4,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Svyatoslav"
            },
            {
                id: 5,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Alexander"
            },
            {
                id: 6,
                messages: ["Hi!", "How are you?", "What are you doing?", "Hello!", "Hello!", "Hello!"],
                name: "Dmitry"
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

export default state;