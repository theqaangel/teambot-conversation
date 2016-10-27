"use strict";

var Botkit = require('botkit');

var TestIntegration = function (controller) {

    var testGitHubIntegration = function (bot, message) {
        bot.reply(message, 'This module is loaded from github repository. UPDATE');
    };

     var sayMyPurpose = function (bot, message) {
        bot.reply(message, 'I live to help teams.');
    };

    return {
        testGitHubIntegration: testGitHubIntegration,
        sayMyPurpose: sayMyPurpose
    };
};

module.exports = TestIntegration;
