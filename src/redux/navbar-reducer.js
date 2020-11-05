let initialState = {
    elements: [
        {id: 1, path: "/profile", value: "My profile"},
        {id: 2, path: "/dialogs", value: "Dialogs"},
        {id: 3, path: "/users", value: "Users"},
        {id: 4, path: "/news", value: "News"},
        {id: 5, path: "/music", value: "Music"},
        {id: 6, path: "/settings", value: "Settings"},
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;