"use strict";

var middleware = require('../../middleware.js');

var TestGitHubIntegration = function(controller) {

    var source = require('./source.js')(controller);

    controller.hears(['test github integration'], 'direct_message,direct_mention,mention', source.testGitHubIntegration);
};

module.exports = TestGitHubIntegration;