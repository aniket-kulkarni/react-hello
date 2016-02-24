'use strict';

/*eslint-disable no-unused-vars*/
var React = require('react');   
var ReactDOM = require('react-dom');

var RouterRouter = require('react-router');
var Router = RouterRouter.Router;
var routes = require('./routes');

ReactDOM.render(<Router>{routes}</Router> , document.getElementById('app'));
