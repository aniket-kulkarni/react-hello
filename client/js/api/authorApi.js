'use strict';

var $ = require('jquery');

var getAuthors = function(success,error) {

    var url = 'js/api/authors.json';

    $.get(url).then(success,error);
};

module.exports = {
    getAuthors : getAuthors
};