import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Burger}from './Burger';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('side-menu'));
ReactDOM.render(<Burger />, document.getElementById('menu-ctrl'));

//Navigation Event Listeners + Functions
      document.getElementById("menu-ctrl").addEventListener ("click", menuSlide, false);
      document.getElementById("menu-ctrl").addEventListener ("click", burgerChange, false);

      function menuSlide() {
        var element = document.getElementById("menu");
           element.classList.toggle("active");
           console.log("tyest");
      }
      function burgerChange() {
        var element = document.getElementById("burger-menu");
           element.classList.toggle("a");
           console.log("mofo");
      }



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
