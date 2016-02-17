"use strict";

var React = require('react');


class AuthorList extends React.Component {

    render() {

        return (
            <div>
                <div className="jumbotron">
                    <h1>Author Page</h1>
                </div>

                <p>{this.props.authors.map((author,i) => {
                    var boundClick = this.props.onClick.bind(this);
                    return <div style={{cursor:'pointer'}} data-index={i} key={author.id} onClick={this.props.onClick}>{author.name}</div>
                })}</p>
            </div>

        );
    }

}

module.exports = AuthorList;
