import React from "react";
import "./App.css";


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <section className="content">
                <div>
                    <img src="https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg" alt="content-img"/>
                </div>
                <div>avatar + description</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;