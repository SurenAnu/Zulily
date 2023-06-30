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
  "name": "user can to see error message \"Please enter a valid email address\" on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Zuily_Step_Definition.user_can_to_see_error_message_on_the_screen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.io.FileNotFoundException: C:\\Users\\SURENANU\\eclipse-workspace\\Zulily\\src\\test\\resources\\ScreenShot\\To validate the Sigin functionality of zulily application with invalid credentials.png (The system cannot find the path specified)\r\n\tat java.base/java.io.FileOutputStream.open0(Native Method)\r\n\tat java.base/java.io.FileOutputStream.open(FileOutputStream.java:293)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:235)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:184)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat org.util.Base_Class.ScreenShot(Base_Class.java:197)\r\n\tat org.step_definition.Hookes.end(Hookes.java:27)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "error_message": "java.io.FileNotFoundException: C:\\Users\\SURENANU\\eclipse-workspace\\Zulily\\src\\test\\resources\\ScreenShot\\To validate the Sigin functionality of zulily application with invalid credentials.png (The system cannot find the path specified)\r\n\tat java.base/java.io.FileOutputStream.open0(Native Method)\r\n\tat java.base/java.io.FileOutputStream.open(FileOutputStream.java:293)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:235)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:184)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat org.util.Base_Class.ScreenShot(Base_Class.java:197)\r\n\tat org.step_definition.Hookes.end(Hookes.java:27)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Zulily_Feature/Register.feature");
formatter.feature({
  "name": "registation funcutionality to be check",
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
  "name": "to validate the registation funcutionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
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
  "name": "The user have to click the \"newmember\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the create the new email \"kuttisurendhar2013.com\"id in the field",
  "keyword": "When "
});
formatter.match({
  "location": "Registation_Page.user_enter_the_create_the_new_email_id_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user have to click the \"emailclick\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to enter the password in the field",
  "rows": [
    {
      "cells": [
        "password",
        "12345678"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registation_Page.user_able_to_enter_the_password_in_the_field(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on WINDOWS (88ce9f3ba0cfd2a15a814ea34d590b92)] -\u003e id: signup_password] (tried for 40 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-RUT4MC3I\u0027, ip: \u0027192.168.0.129\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SURENANU\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51409}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 88ce9f3ba0cfd2a15a814ea34d590b92\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat org.util.Base_Class.sendWait(Base_Class.java:156)\r\n\tat org.step_definition.Registation_Page.user_able_to_enter_the_password_in_the_field(Registation_Page.java:29)\r\n\tat ✽.user able to enter the password in the field(file:src/test/resources/Zulily_Feature/Register.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user have to click the \"passclick\" button",
  "keyword": "And "
});
formatter.match({
  "location": "Zuily_Step_Definition.the_user_have_to_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.io.FileNotFoundException: C:\\Users\\SURENANU\\eclipse-workspace\\Zulily\\src\\test\\resources\\ScreenShot\\to validate the registation funcutionality.png (The system cannot find the path specified)\r\n\tat java.base/java.io.FileOutputStream.open0(Native Method)\r\n\tat java.base/java.io.FileOutputStream.open(FileOutputStream.java:293)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:235)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:184)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:138)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:117)\r\n\tat org.util.Base_Class.ScreenShot(Base_Class.java:197)\r\n\tat org.step_definition.Hookes.end(Hookes.java:27)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});