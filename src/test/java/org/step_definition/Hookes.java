package org.step_definition;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.util.Base_Class;

import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hookes extends Base_Class {
	Logger l;
	@Before()
	public void start() {
 l = LogManager.getLogger(Hookes.class);
		System.out.println("before Scenario");
		browserlaunch("chrome");
		maxMize();
		urlLaunch(getProperty("url"));
		l.info("url Is launched successfully");
		
	}

	@After()
	public void end(Scenario cs) throws InterruptedException, IOException {
		System.out.println("after Scenario");
		String name = cs.getName();
		if (cs.isFailed()) {
			ScreenShot(name);
		}
l.info("Driver has quit");
		quit();

	}
	@After(order = 1)
	public void end() throws InterruptedException {
		quit();
		
	}

}
