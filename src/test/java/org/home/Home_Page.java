package org.home;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Home_Page {
	
	public static WebDriver driver;
	public Home_Page(WebDriver driver2) {
this.driver= driver2;
PageFactory.initElements(driver2, this);
	}
	
	@FindBy(xpath = "//span[@class='active-bottom-border']")
	private List<WebElement> headline;

	

	public List<WebElement> getHeadline() {
		return headline;
	}

}
