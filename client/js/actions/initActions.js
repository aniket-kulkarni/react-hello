'use strict';

var authorApi = require('../api/authorApi.js');
var alt = require('../alt.js');

class InitActions {

    initAuthor() {

        return function(dispatch) {

            var success = function(response) {
                dispatch(response);
            };

            var error = function() {};

            authorApi.getAuthors(success,error);

        };
       
    }

}

const initActions1 = alt.createActions(InitActions);

module.exports = initActions1;

