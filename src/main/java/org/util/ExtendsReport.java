package org.util;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.ExtentHtmlReporterConfiguration;
import com.aventstack.extentreports.reporter.configuration.Theme;

import cucumber.api.Result.Type;
import cucumber.api.Scenario;

public class ExtendsReport {
	static ExtentReports ss;

	public static void startReport() {
		ExtentHtmlReporter h = new ExtentHtmlReporter(
				System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\extentReport\\extent.html");
		h.config().setDocumentTitle("AnuPriya");
		h.config().setReportName("Surendhar report");
		h.config().setTheme(Theme.DARK);

		ss = new ExtentReports();
		ss.attachReporter(h);
		ss.setSystemInfo("Browser", "Chrome");
		ss.setSystemInfo("project", "Zuily");

	}

	public static void endReport() {
		ss.flush();
	}

	public static void testLog(Scenario s) {
		String name = s.getName();
		Type status = s.getStatus();
		switch (status) {
		case PASSED:
			ss.createTest(name).pass("case is pass");
			break;

		case FAILED:
			ss.createTest(name).fail("case is fail");
			break;
		case SKIPPED:
			ss.createTest(name).skip("case Skiped");
			break;
		}

	}

}
