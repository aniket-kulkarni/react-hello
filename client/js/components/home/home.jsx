'use strict';

var React = require('react');
var Header = require('../common/header');

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <h1>Hello World</h1>
            </div>
        );
    }

}

module.exports = Home;
