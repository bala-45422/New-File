import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import New5 from './New5';
// import Header from './Header';
import reportWebVitals from './reportWebVitals';


// // import FunctionButton from './Count/FunctionButton';
// import Hooks from './Count/Hooks'
// import compa from './Components/comp-a';
// import App from './App';
import compa from "./Components/comp-a/Compa";


ReactDOM.render(
  <React.StrictMode>
    <compa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
