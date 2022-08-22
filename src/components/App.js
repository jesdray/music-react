import React from "react";
import { createStore } from 'redux'
import { Provider } from "react-redux";

import { data } from "../utils/utils";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  localStorage.setItem('test', 1);

  const defaultState = {
    playListMusic: data,
    darkThem: false
  }

  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "playListMusic":
        return { ...state, playListMusic: action.play }
      case "darkSwitch":
        return { ...state, darkThem: action.darkThem }
      default:
        return state
    }
  }

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
