package org.runner_class;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class )
@CucumberOptions
(features = "@src\\test\\resources\\Reports\\FailureReport\\Scanariofaild.txt",glue = "org.step_definition")





public class Faild_Runner_Class {
	                                 

}
