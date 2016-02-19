
var authorApi = require("../api/authorApi.js");
var dispatcher = require("../dispatcher/appDispatcher.js");
var constants = require("../constants/constants.js");

var authorActions = {
    
    createAuthor : function(author) {



    },

    deleteAuthor : function(authorId) {
        
        setTimeout(function() {
            dispatcher.dispatch({
                type : constants.DELETE_AUTHOR,
                data : {
                    authorId : authorId
                }
            });
        }, 100);
        

    }
};


module.exports = authorActions;