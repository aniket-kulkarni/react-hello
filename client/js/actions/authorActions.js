'use strict';

var alt = require('../alt.js');

class AuthorActions {

    deleteAuthor(authorId) {

        return function(dispatch) {

            setTimeout(function() {
                dispatch(authorId);
            }, 100);

        };

       
    }

}

const locationActions = alt.createActions(AuthorActions);

module.exports = locationActions;