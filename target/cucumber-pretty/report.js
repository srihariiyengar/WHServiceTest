$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HappyHolidayMaker.feature");
formatter.feature({
  "line": 1,
  "name": "Assert the Weather forecast for Sydney on Thursday is greater than 10 Degree Celsius",
  "description": "",
  "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "A happy holiday maker",
  "description": "",
  "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius;a-happy-holiday-maker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I like to holiday in \u003ccity\u003e of \u003ccountry\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I only like to holiday on \u003cdayOfTheWeek\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I look up the weather forecast",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I receive the weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the temperature is warmer than \u003cmaxTemperature\u003e degrees",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius;a-happy-holiday-maker;",
  "rows": [
    {
      "cells": [
        "city",
        "country",
        "dayOfTheWeek",
        "maxTemperature"
      ],
      "line": 10,
      "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius;a-happy-holiday-maker;;1"
    },
    {
      "cells": [
        "Sydney",
        "AU",
        "4",
        "10"
      ],
      "line": 11,
      "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius;a-happy-holiday-maker;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "A happy holiday maker",
  "description": "",
  "id": "assert-the-weather-forecast-for-sydney-on-thursday-is-greater-than-10-degree-celsius;a-happy-holiday-maker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I like to holiday in Sydney of AU",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I only like to holiday on 4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I look up the weather forecast",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I receive the weather forecast",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the temperature is warmer than 10 degrees",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 21
    },
    {
      "val": "AU",
      "offset": 31
    }
  ],
  "location": "HappyHolidayStepDefinition.i_like_to_holiday_in_city_of_country(String,String)"
});
formatter.result({
  "duration": 404484339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "HappyHolidayStepDefinition.i_only_like_to_holiday_on_dayOfTheWeek(int)"
});
formatter.result({
  "duration": 1620324,
  "status": "passed"
});
formatter.match({
  "location": "HappyHolidayStepDefinition.i_look_up_the_weather_forecast()"
});
formatter.result({
  "duration": 6311886689,
  "status": "passed"
});
formatter.match({
  "location": "HappyHolidayStepDefinition.i_receive_the_weather_forecast()"
});
formatter.result({
  "duration": 7226528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "HappyHolidayStepDefinition.the_temperature_is_warmer_than_degrees(int)"
});
formatter.result({
  "duration": 1436900634,
  "status": "passed"
});
});