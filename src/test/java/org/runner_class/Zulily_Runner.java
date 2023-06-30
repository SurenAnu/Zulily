package org.runner_class;

import org.home.Home_Page;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.util.Base_Class;
import org.util.JVM_Report;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.github.bonigarcia.wdm.WebDriverManager;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Zulily_Feature"
                    ,glue = "org.step_definition"
                    ,dryRun = false
                    ,monochrome = true
                    ,plugin = {"pretty"
                    ,"html:src\\test\\resources\\Reports"
                    ,"json:src\\test\\resources\\Reports\\report\\jsonreport.json"
                    ,"junit:src\\test\\resources\\Reports\\jreport\\junitreport.xml"
                    ,"rerun:src\\test\\resources\\Reports\\FailureReport\\Scanariofaild.txt"
                    
                    		}
                    
                 )

public class Zulily_Runner {
	
@AfterClass
public static void jvmReport() {
	JVM_Report.generateJVMreport("src\\test\\resources\\Reports\\report\\jsonreport.json");
	System.out.println("report generater successfully");
	
	
}
}
