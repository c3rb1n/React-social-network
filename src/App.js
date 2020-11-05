import React from "react";
import "react-h5-audio-player/src/styles.scss";
import "./App.scss";
import {withRouter, Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp, pageFound, pageNotFound} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Clock from "./components/Clock/Clock";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {
    componentDidMount = () => {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <Switch>
                <Route path="/login" render={() => <Login/>}/>
                <div>
                    {this.props.isPageFound && <HeaderContainer/>}
                    <div className="app-wrapper">
                        {this.props.isPageFound &&<NavbarContainer/>}
                        <div className="content">
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/dialogs/:userId?" render={withSuspense(DialogsContainer)}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="*"
                                       render={() => <PageNotFound
                                           isPageFound={this.props.isPageFound}
                                           pageFound={this.props.pageFound}
                                           pageNotFound={this.props.pageNotFound}/>}/>
                            </Switch>
                        </div>
                    </div>
                    <div className="clock-wrapper">
                        {this.props.isPageFound && <Clock/>}
                    </div>
                </div>
            </Switch>
        );
    };
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized,
        isPageFound: state.app.isPageFound
    };
};

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, pageFound, pageNotFound})
)(App);

const ReactSocialNetworkApp = props => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};

export default ReactSocialNetworkApp;