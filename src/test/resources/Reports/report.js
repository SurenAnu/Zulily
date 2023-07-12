$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Zulily_Feature/A_Zulily.feature");
formatter.feature({
  "name": "To validate the signin funcutionality of zulily application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in Zulily login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_should_be_in_Zulily_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Sigin functionality of zulily application with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@retest"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "The user have to click the \"Sigin\" button",
  "keyword": "When "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to enter username and password in the field",
  "rows": [
    {
      "cells": [
        "username",
        "userpassword"
      ]
    },
    {
      "cells": [
        "kutti",
        "12345"
      ]
    },
    {
      "cells": [
        "arun",
        "22222"
      ]
    },
    {
      "cells": [
        "kumar",
        "88888"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_has_to_enter_username_and_password_in_the_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to click the \"shopnow\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can to see error message \"errormsg\" on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Zuily_Step_Definition.user_can_to_see_error_message_on_the_screen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in Zulily login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_should_be_in_Zulily_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Sigin functionality of zulily application with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "The user have to click the \"Sigin\" button",
  "keyword": "When "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to enter username and password in the field",
  "rows": [
    {
      "cells": [
        "username",
        "userpassword"
      ]
    },
    {
      "cells": [
        "AAAAA",
        "111111111111"
      ]
    },
    {
      "cells": [
        "BBBBB",
        "222222222222"
      ]
    },
    {
      "cells": [
        "VVVVVVV",
        "8888888888"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_has_to_enter_username_and_password_in_the_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to click the \"shopnow\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can to see error message \"address\" on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Zuily_Step_Definition.user_can_to_see_error_message_on_the_screen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});