require("jquery");

/*eslint-disable no-unused-vars*/
var React = require('react');   
var ReactDOM = require('react-dom');

var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

function render() {

    var hash = window.location.hash.substr(1);

    var Child = (hash === 'about') ? About : Home; 

    ReactDOM.render(
      <Child/>,
      document.getElementById('app')
    );    
}

window.addEventListener('hashchange',render);
render();



