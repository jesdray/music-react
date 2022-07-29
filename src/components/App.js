import React from "react";
import { createStore } from 'redux'
import { Provider } from "react-redux";

import Header from "./Header";
import Main from "./Main";

function App() {
  
  localStorage.setItem('test', 1);
  console.log(localStorage.getItem('test'));

  const defaultState = {
    playListMusic: [],
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
    </Provider>
  );
}

export default App;
