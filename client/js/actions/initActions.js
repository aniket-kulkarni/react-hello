var authorApi = require("../api/authorApi.js");
var dispatcher = require("../dispatcher/appDispatcher.js");
var constants = require("../constants/constants.js");

var initActions = {
    
    initAuthor : function() {

        var success = function(response) {

            var authors = response;

            dispatcher.dispatch({
                type : constants.APP_INIT,
                authors : authors
            });
        };

        var error = function(){};

        authorApi.getAuthors(success,error);

    }
};


module.exports = initActions;