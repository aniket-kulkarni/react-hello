"use strict";

var React = require('react');
var hashHistory = require('react-router').hashHistory;
var AuthorList = require('./AuthorList');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions.js');

class Author extends React.Component {

    
    constructor(props) {
        
        super(props);
        this.state = {
            authors : []
        };
        
    }
    deleteAuthor(authorId) {
        AuthorActions.deleteAuthor(authorId);
    }

    goToAuthor(se,e) {

        var index = se.currentTarget.dataset.index,
            author = this.state.authors[index];

        window._tempAuthor = author;

        hashHistory.push({ pathname : `/authors/${index}`}); 

    }

    _onChange() {
        var a = 1 + 2;
        this.setState({authors : AuthorStore.getAllAuthors()});
    }

    componentDidMount() {
        this.setState({authors : AuthorStore.getAllAuthors()});   
        AuthorStore.addChangeListener(this._onChange.bind(this));
    }

   

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    }

    render() {

        return (
            <AuthorList context={this} authors={this.state.authors} onClick={this.goToAuthor.bind(this)}/>
        );
    }

}

module.exports = Author;
