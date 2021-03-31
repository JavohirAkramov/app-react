import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { store } from "./redux/redux-store.js";
import StoreContext from './StoreContext.js';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App /> 
    </StoreContext.Provider>,
    document.getElementById("root")
  );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

export default rerenderEntireTree;
