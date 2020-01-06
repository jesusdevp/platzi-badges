<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';
=======
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge";
>>>>>>> 3276c88719c25cc944cbd256479066a84e549cf5

const container = document.getElementById("app");

<<<<<<< HEAD
ReactDOM.render(<App />, container);
=======
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Jesús"
    lastName="Ramírez"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    jobTitle="Frontend Enginer"
    twitter="jesusdevp"
  />,
  container
);
>>>>>>> 3276c88719c25cc944cbd256479066a84e549cf5
