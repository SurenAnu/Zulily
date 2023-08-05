package org.runner_class;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.home.Home_Page;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.util.Base_Class;
import org.util.ExtendsReport;
import org.util.JVM_Report;

import cucumber.api.java.hr.Zadan;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.github.bonigarcia.wdm.WebDriverManager;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Zulily_Feature"
                    ,glue = "org.step_definition"
                    ,dryRun = false
                    ,monochrome = false
                    ,tags = {"@sanity or @somke","@smoke"}
                    ,stepNotifications = true 
                    ,plugin = {"pretty"
                    ,"html:src\\test\\resources\\Reports"
                    ,"json:src\\test\\resources\\Reports\\report\\jsonreport.json"
                    ,"junit:src\\test\\resources\\Reports\\jreport\\junitreport.xml"
                    
                    ,"rerun:src\\test\\resources\\Reports\\FailureReport\\Scanariofaild.txt"
                    
                    		}
                    
                 )

public class Zulily_Runner {
	
	@BeforeClass
	public static void BF() {
		Logger log = LogManager.getLogger(Zulily_Runner.class);
		log.info("Before class passed");
		ExtendsReport.startReport();
	}
	
@AfterClass
public static void jvmReport() {
	Logger logger = LogManager.getLogger(Zulily_Runner.class);
	JVM_Report.generateJVMreport("src\\test\\resources\\Reports\\report\\jsonreport.json");
	logger.info("report generater successfully");
	ExtendsReport.endReport();
	
	
}
}
