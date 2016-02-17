require("jquery");

/*eslint-disable no-unused-vars*/
var React = require('react');   
var Header = require('./header/header');

class Main extends React.Component {

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



