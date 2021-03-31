import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Video from "./components/Video/Video.jsx";
import {BrowserRouter, Route} from "react-router-dom"

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (<Profile />)}
          />
          <Route
            path="/dialogs"
            component={Dialogs}
          />
          <Route path="/news" component={News} />
          <Route path="/video" component={Video} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
