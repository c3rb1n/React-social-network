import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = props => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar store={props.store}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
};

export default App;