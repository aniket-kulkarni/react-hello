'use strict';

var alt = require('../alt.js');
var InitActions = require('../actions/initActions.js');

class AuthorStore {

    constructor() {
        this._authors = [];

        this.bindListeners({
            handleInitAuthor : InitActions.initAuthor
        });
    }

    handleInitAuthor(authors) {
        this._authors = authors;
    }

    getAllAuthors() {
        return this._authors;
    }


}

module.exports = alt.createStore(AuthorStore, 'AuthorStore');