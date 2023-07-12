package org.runner_class;

import org.testng.annotations.DataProvider;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources",glue = "org.step_definition")
public class TestNG_Report extends AbstractTestNGCucumberTests {

	
	@DataProvider(parallel = true)
	@Override
	public Object[][] scenarios() {
		// TODO Auto-generated method stub
		return super.scenarios();
	}
	
}
