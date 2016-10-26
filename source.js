"use strict";

var Botkit = require('botkit');

var TestIntegration = function (controller) {

    var testGitHubIntegration = function (bot, message) {
        bot.reply(message, 'This module is loaded from github repository. UPDATED!!!! UPDATED!!!!');
    };

    return {
        testGitHubIntegration: testGitHubIntegration,
    };
};

module.exports = TestIntegration;
