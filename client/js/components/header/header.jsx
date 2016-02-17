"use strict";

var React = require("react");

class Header extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#authors">Authors</a></li>
                </ul>
            </nav>
        );   
    }

}

module.exports = Header;