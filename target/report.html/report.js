$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddTariffPlan.feature");
formatter.feature({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tar"
    }
  ]
});
formatter.scenario({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tar"
    },
    {
      "name": "@list"
    }
  ]
});
formatter.step({
  "name": "user launch demo telecom webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.user_launch_demo_telecom_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on addtarficplan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.user_click_on_addtarficplan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the all fileds by using one dim list",
  "rows": [
    {
      "cells": [
        "1",
        "1",
        "2",
        "2",
        "1",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.user_click_the_all_fileds_by_using_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify Congratulations is generte",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.user_verify_Congratulations_is_generte()"
});
formatter.result({
  "status": "passed"
});
});