'use strict';

var React = require('react');
var {Route,IndexRoute} = require('react-router');


var routes = (
    <Route path='/' component={require('./components/main')}>
        <IndexRoute component={require('./components/home/home')}/>
        <Route path='project' component={require('./components/project/project')}/>
    </Route>
);

module.exports = routes;
