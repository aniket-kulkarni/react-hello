'use strict';

var React = require('react');

class Header extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><a href='#project'>project</a></li>
                </ul>
            </nav>
        );   
    }

}

module.exports = Header;