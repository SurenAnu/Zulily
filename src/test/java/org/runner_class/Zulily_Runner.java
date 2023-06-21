package org.runner_class;

import org.home.Home_Page;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.util.Base_Class;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.github.bonigarcia.wdm.WebDriverManager;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Zulily_Feature"
                    ,glue = "org.step_definition"
                    ,dryRun = false)
public class Zulily_Runner {
	
//	@AfterClass
//	public static void end() {
//		Base_Class.quit();
//	}
}
	