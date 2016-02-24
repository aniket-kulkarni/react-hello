'use strict';

var React = require('react');

var MenuBar = require('./menu-bar');
var ControlBar = require('./control-bar');

var css = require('../../../css/project.css'); 

class Project extends React.Component {

    render() {
        return (
            <div className={css.root} >                
                <MenuBar/>
                <ControlBar/>
            </div>
        );
    }

}

module.exports = Project;
