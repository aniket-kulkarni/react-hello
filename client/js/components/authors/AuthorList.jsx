"use strict";

var React = require('react');


class AuthorList extends React.Component {

    render() {

        return (
            <div>
                <div className="jumbotron">
                    <h1>Author Page</h1>
                </div>

                <div>{this.props.authors.map((author,i) => {
                    var boundClick = this.props.onClick.bind(this);
                    return (
                        <div key={author.id}>
                            <div onClick={this.props.context.deleteAuthor.bind(this.props.context,author.id)}>Delete</div>
                            <div style={{cursor:'pointer'}} data-index={i} key={author.id} onClick={this.props.onClick}>{author.name}</div>
                            <br/>
                        </div>
                        )
                })}</div>
            </div>

        );
    }

}

module.exports = AuthorList;
