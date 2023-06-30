package org.step_definition;

import java.io.IOException;

import org.util.Base_Class;

import cucumber.api.*;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import cucumber.api.*;

public class Hookes extends Base_Class {

	@Before()
	public void start() {

		System.out.println("before Scenario");
		browserlaunch("chrome");
		maxMize();
		urlLaunch();
	}

	@After()
	public void end(Scenario cs) throws InterruptedException, IOException {
		System.out.println("after Scenario");
		String name = cs.getName();
	
		
			ScreenShot(name);
		

		quit();

	}

	@Before(value = "@regression", order = 1)
	public void start1() {
		System.out.println("hooks method");

	}

	@After("@regression")
	public void end1() {
		System.out.println("hooks method");
	}

}
