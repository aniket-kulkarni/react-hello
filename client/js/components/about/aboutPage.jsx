"use strict";

var React = require('react');

var About = React.createClass({

    getDefaultProps: function () {
       return { list: [] };
    },

    render : function() {
        return (
            <div className="jumbotron">                

                <h1> This is my about Page</h1> 

                {this.props.list.map(function(val){
                    return <div> {val} </div>
                })}
                
            </div>
        );
    }
});

module.exports = About;