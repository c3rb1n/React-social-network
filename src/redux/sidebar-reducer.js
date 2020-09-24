let initialState = {
    elements: [
        {id: 1, path: "/profile/", value: "Profile"},
        {id: 2, path: "/dialogs", value: "Messages"},
        {id: 3, path: "/users", value: "Users"},
        {id: 4, path: "/news", value: "News"},
        {id: 5, path: "/music", value: "Music"},
        {id: 6, path: "/settings", value: "Settings"},
    ],
    friends: [
        {id: 1, name: "Ilya"},
        {id: 2, name: "Vitaly"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Svyatoslav"},
        {id: 5, name: "Alexander"},
        {id: 6, name: "Dmitry"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;