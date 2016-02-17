"use strict";

var {Route,IndexRoute} = require('react-router');
var React = require('react');


var routes = (
    <Route path="/" component={require('./components/main')}>
        <IndexRoute component={require('./components/homePage')}/>
        <Route path="about" component={require('./components/about/aboutPage')}/>
        <Route path="authors" component={require('./components/authors/authorPage')}/>
        <Route path="authors/:authorId" component={require('./components/authors/AuthorDetails')}/>
    </Route>
);

module.exports = routes;
