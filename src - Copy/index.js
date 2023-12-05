import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Conditional from './Components/Conditional/Conditional'
import reportWebVitals from './reportWebVitals';
//import Usestate from'./Components/UseState/UseState'
//import Useeffect from'./Components/UseEffect/UseEffect'
//import Usecontext from'./Components/UseContext/UseContext'
//import Array from './Components/Array/Array.js'
//import Hoc from './Components/Hoc/Hoc.js'
//import Validation from './Components/Validation/Validation.js'
//import Timer from './Components/Timer/Timer.js'
//import Lifecycle from './Components/Lifecycle/Lifecycle.js'
//import Hooks from './Components/Hooks/Hooks.js'
//import App from './App.js'
//import Signup from './Components/Signup/Signup.js'
//import Signin from './Components/Signin/Signin.js'
//import Dashboard from './Components/Dashboard/Dashboard.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Conditional/>
  </React.StrictMode>
  );
  //<Usestate/>
  //<Useeffect/>
  //<Usecontext/>
  //<Array/>
  //<Validation/>
  //<Hoc/>
  //<Timer/>
  //<Lifecycle/>
  //<Hooks/>
  //<App />
  //<Signup/>
  //<Signin/>
  //<Dashboard/>
  
  //<Homepage/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
