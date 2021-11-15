import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "/home/javohir/Projects/app-react/src/components/Dialogs/DialogsContainer.jsx";
import Login from './components/Login/Login.jsx';
import News from "./components/News/News.jsx";
import Video from "./components/Video/Video.jsx";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?"render={() => (<ProfileContainer />)} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/news" component={News} />
          <Route path="/video" component={Video} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
