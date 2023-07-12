package org.util;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVM_Report {
	public static void generateJVMreport(String J) {
		
		
		
		File f = new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\JVMreports");
		Configuration c = new Configuration(f, "Zulily");
		c.addClassifications("windows", "11 ");
		c.addClassifications("framework", "cucmber");
		c.addClassifications("client", "Anuu");
		List<String> l = new  LinkedList<>();
		l.add(J);
ReportBuilder b = new ReportBuilder(l, c);
b.generateReports();
	}

}
