"use strict";

var React = require('react');

class AuthorDetails extends React.Component {

    
    constructor(props) {
        
        super(props);
        
        var author = window._tempAuthor;

        this.state = {
            author : author
        };
    }

    componentDidMount() {
        // var authorId = this.props.param.authorId,
        //     author = 
        
        var a = 1 + 2;
        var a = 1 + 2;
    }

    render() {

        return (
            <div>Author Details
                <p>{this.state.author.id}</p>
                <p>{this.state.author.name}</p>
                <p>{this.state.author.skills}</p>
            </div>
        );
    }

}

module.exports = AuthorDetails;
