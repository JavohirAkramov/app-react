import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "/home/javohir/Projects/app-react/src/components/Dialogs/DialogsContainer.jsx";
import LoginContainer from './components/Login/Login.jsx';
import News from "./components/News/News.jsx";
import Video from "./components/Video/Video.jsx";
import Preloader from "./components/commons/Preloader/Preloader"
import { BrowserRouter, Route } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      !this.props.initialized
        ? <Preloader />
        : <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => (<ProfileContainer />)} />
            <Route path="/dialogs" component={DialogsContainer} />
            <Route path="/news" component={News} />
            <Route path="/video" component={Video} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/login" component={LoginContainer} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appPage.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
