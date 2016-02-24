'use strict';

var React = require('react');  

var css = require('../../css/app.css'); 

class Main extends React.Component {

    componentWillMount() {
        
    }

    render() {
        return (
            <div className={css.main}>
                {this.props.children}
            </div>
        );
    }

}

module.exports = Main;
    