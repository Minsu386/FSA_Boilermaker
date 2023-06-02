import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import Main from './components/Main';



const container = document.getElementById("app")
const root = createRoot(container)


root.render(
  <Router>
    <Provider store={store}>
      <Main />  
    </Provider>
  </Router>  
)