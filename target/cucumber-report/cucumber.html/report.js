$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("verifyText.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Message",
  "description": "As a user I should be able to verify Message \u0027Become a Spartan\u0027",
  "id": "verify-message",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User Should be able to verify Message",
  "description": "",
  "id": "verify-message;user-should-be-able-to-verify-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027cookies\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on \u0027For individuals\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to verify message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify message \"\u003cmessage1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify message \"\u003cmessage2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verify-message;user-should-be-able-to-verify-message;",
  "rows": [
    {
      "cells": [
        "message",
        "message1",
        "message2"
      ],
      "line": 13,
      "id": "verify-message;user-should-be-able-to-verify-message;;1"
    },
    {
      "cells": [
        "Become",
        "a",
        "Spartan"
      ],
      "line": 14,
      "id": "verify-message;user-should-be-able-to-verify-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5792846800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Should be able to verify Message",
  "description": "",
  "id": "verify-message;user-should-be-able-to-verify-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027cookies\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on \u0027For individuals\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to verify message \"Become\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify message \"a\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to verify message \"Spartan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 133790600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnCookies()"
});
formatter.result({
  "duration": 335587600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iMouseHoverAndClickOnForIndividuals()"
});
formatter.result({
  "duration": 2547204900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Become",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 60199600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 41341200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spartan",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 37953400,
  "status": "passed"
});
formatter.after({
  "duration": 704542300,
  "status": "passed"
});
});