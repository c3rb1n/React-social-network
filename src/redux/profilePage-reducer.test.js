import profilePageReducer, {addPost, deletePost} from "./profilePage-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post.", likesCount: 20},
        {id: 3, message: "Hi!", likesCount: 45},
        {id: 4, message: "Hello!", likesCount: 8}
    ]
};

it("length of posts should be incremented", () => {
    let action = addPost("I am a programmer!");

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
    let action = addPost("I am a programmer!");

    let newState = profilePageReducer(state, action);

    expect(newState.posts[4].message).toBe("I am a programmer!");
});

it("after deleting length of posts should be decremented", () => {
    let action = deletePost(1);

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it("after deleting length of posts should not be decremented if ID is incorrect", () => {
    let action = deletePost(1000);

    let newState = profilePageReducer(state, action);

    expect(newState.posts.length).toBe(4);
});