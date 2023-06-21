package org.z;

import org.home.Login;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.util.Base_Class;

public class zulily_test extends Base_Class{
	public static void main(String[] args) throws Exception {
		browserlaunch("chrome");
	urlLaunch();
	Login l = new Login();
	clickWait(l.getSigin());
	//sendWait(l.getEmailfield(), "surendhar");
	sendWait(l.getEmailfield(), excel("facebook", "id", 1, 0));
	
		
		
	} 
	

}
