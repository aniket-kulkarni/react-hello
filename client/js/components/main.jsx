require("jquery");

/*eslint-disable no-unused-vars*/
var React = require('react');   
var Header = require('./header/header');
var initActions = require('../actions/initActions');

class Main extends React.Component {

    componentWillMount() {
        initActions.initAuthor();
    }

    render() {
        return (
            
            <div className="jumbotron">
                <Header/>
                {this.props.children}
            </div>
        );
    }

}

module.exports = Main;
    