import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


// REACT 17:

// ReactDOM.render(
  // <React.StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </React.StrictMode>,
//   document.getElementById('root')
// );

// REACT 18: 

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
