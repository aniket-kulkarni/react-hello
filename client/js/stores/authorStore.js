var dispatcher = require("../dispatcher/appDispatcher.js");
var constants = require("../constants/constants.js");
var CHANGE_EVENT = "change";
var eventEmitter = require('events').EventEmitter;

var _authors = [];

var AuthorStore = Object.assign({}, eventEmitter.prototype, {

    addChangeListener : function(callback) {
        this.on(CHANGE_EVENT,callback);
    },

    removeChangeListener : function(callback) {
        this.removeListener(CHANGE_EVENT,callback);
    },

    emitChange : function() {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors : function() {
        return _authors;
    }

});

dispatcher.register(function(data) {


    switch (data.type) {
        case constants.APP_INIT:
            _authors = data.authors;
            AuthorStore.emitChange();
            break;
        case constants.DELETE_AUTHOR:

            var authorObj = _authors.filter( elem => data.data.authorId === elem.id);
            var authorIndex = _authors.indexOf(authorObj[0]);
            _authors.splice((authorIndex),1);
            AuthorStore.emitChange();
            break;
        default:
            // statements_def
            break;
    }

});

module.exports = AuthorStore;