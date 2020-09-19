const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 20},
        {id: 3, message: "Hi!", likesCount: 45},
        {id: 4, message: "Hello!", likesCount: 8}
    ],
    newPostText: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;

            return stateCopy;
        }
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            let newPost = {
                id: 5,
                message: stateCopy.newPostText,
                likesCount: 0
            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";

            return stateCopy;
        }
        default:
            return state;
    }
};

export const updateNewPostTextActionCreator = newText => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});
export const addPostActionCreator = () => ({
    type: ADD_POST
});

export default profilePageReducer;