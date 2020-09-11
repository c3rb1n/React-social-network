import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {updateNewPostText, addPost, updateNewMessageText, sendMessage} from "./redux/state";

export let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText} addPost={addPost}
                 updateNewMessageText={updateNewMessageText}
                 sendMessage={sendMessage}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
};