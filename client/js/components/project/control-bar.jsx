'use strict';

var React = require('react');

var Navigator = require('./navigator');
var Viewer = require('./viewer');
var Editor = require('./editor');
var Patterns = require('./patterns');

var css = require('../../../css/project.css');

class ControlBar extends React.Component {

    render() {
        return (
            <div className={css.controlBar}>                
                <Navigator/>               
                <Viewer/>               
                <Editor/>               
                <Patterns/>               
            </div>
        );
    }

}

module.exports = ControlBar;
