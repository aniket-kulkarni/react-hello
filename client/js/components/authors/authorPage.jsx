"use strict";

var React = require('react');
var hashHistory = require('react-router').hashHistory;
var AuthorList = require('./AuthorList');
var AuthorApi = require('../../api/authorApi');

class Author extends React.Component {

    
    constructor(props) {
        
        super(props);
        this.state = {
            authors : []
        };
    }

    goToAuthor(se,e) {

        var index = se.currentTarget.dataset.index,
            author = this.state.authors[index];

        window._tempAuthor = author;

        hashHistory.push({ pathname : `/authors/${index}`}); 

    }

    loadFromServer() {

        function success(response) {
            console.log(response);
            this.setState({authors : response});
        }

        function error(response) {
            console.log(response)
        }
    
        AuthorApi.getAuthors(success.bind(this),error);

    }

    componentDidMount() {
        this.loadFromServer();
    }

    render() {

        return (
            <AuthorList authors={this.state.authors} onClick={this.goToAuthor.bind(this)}/>
        );
    }

}

module.exports = Author;
