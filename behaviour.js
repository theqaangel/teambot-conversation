"use strict";

var middleware = require('../../middleware.js');

var TestGitHubIntegration = function(controller) {

    var source = require('./source.js')(controller);

    controller.hears(['test github integration'], 'direct_message,direct_mention,mention', source.testGitHubIntegration);

    controller.hears(['what is you purpose'], 'direct_message,direct_mention,mention', source.sayMyPurpose);    
};

module.exports = TestGitHubIntegration;