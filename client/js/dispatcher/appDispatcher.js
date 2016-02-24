'use strict';

var Dispatcher = require('flux').Dispatcher;

var dispatcher = new Dispatcher();

function dispatch(data) {
    console.log('Inside dispatcher');
    dispatcher.dispatch(data);
}

function register(cb) {
    dispatcher.register(cb);
}

module.exports = {
    dispatch : dispatch,
    register : register
};