'use strict';
const Alexa = require('alexa-sdk');
const facts = require('./facts.js');
const APP_ID = "_";
const SKILL_NAME = "Wahoo Facts";
const HELP_MESSAGE = "You can ask me for a fun fact about U. V. A. Ask for a fact.";
const HELP_REPROMPT = "Ask me to tell you a fact.";
const STOP_MESSAGE = "Goodbye and wah who wah!";

function getFact(){
  var index = Math.floor(Math.random() * facts.length);
  var factArray = facts['facts'];
  var selectedFact = factArray[index];
  return fact;
}

const handlers = {
    // LaunchRequest when user says 'Alexa, open wahoo facts'
    'LaunchRequest': function () {
      this.emit('getFactIntent');
    },
    // getFactIntent when user says 'Give me a fact'
    'getFactIntent': function () {
      const speechOutput = getFact();
      this.emit(':tell', speechOutput);
    },
    // HelpIntent when user says 'Help'
    'AMAZON.HelpIntent': function () {
      this.emit(':ask', HELP_MESSAGE, HELP_REPROMPT);
    },
    // CancelIntent when the user says 'cancel'
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', STOP_MESSAGE);
    },
    // StopIntent when the user says 'no' or 'stop'
    'AMAZON.StopIntent': function () {
      this.emit(':tell', STOP_MESSAGE);
    }
};

// Give the handler object and it's functions to the lambda for
// execution
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context); // create alexa obj
    alexa.appId = APP_ID; // register app id
    alexa.registerHandlers(handlers); // register handlers
    alexa.execute(); // begin
};
