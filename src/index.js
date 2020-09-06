import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: "15"},
    {id: 2, message: "It's my first post.", likesCount: "20"},
    {id: 3, message: "Hi!", likesCount: "45"},
    {id: 4, message: "Hello!", likesCount: "8"}
];

let dialogs = [
    {id: 1, name: "Ilya"},
    {id: 2, name: "Vitaly"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Svyatoslav"},
    {id: 5, name: "Alexander"},
    {id: 6, name: "Dmitry"}
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "What are you doing?"},
    {id: 4, message: "Hello!"},
    {id: 5, message: "Hello!"},
    {id: 6, message: "Hello!"}
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
