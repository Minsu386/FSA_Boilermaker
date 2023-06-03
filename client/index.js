import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import Main from './components/Main';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';



const container = document.getElementById("app")
const root = createRoot(container)


root.render(
  <Router>
    <Provider store={store}>
      <Main />  
    </Provider>
  </Router>  
)