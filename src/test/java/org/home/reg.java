package org.home;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.util.Base_Class;

public class reg extends Base_Class {

	public reg() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//a[text()='Become a Member']")
	private WebElement newmember;

	public WebElement getNewmember() {
		return newmember;
	}

	public WebElement getRegemail() {
		return regemail;
	}

	public WebElement getEmailclick() {
		return emailclick;
	}

	public WebElement getRegpass() {
		return regpass;
	}

	public WebElement getPassclick() {
		return passclick;
	}
	@FindBy(xpath = "(//input[@class='form-control form-control--outline'])[3]")
	private WebElement emil;

	public WebElement getEmil() {
		return emil;
	}

	@FindAll({ @FindBy(id = "signup_email"),
			@FindBy(xpath = "(//input[@class='form-control form-control--outline'])[3]") })
	private WebElement regemail;

	@FindBys({ @FindBy(id = "signup-button"),
			@FindBy(xpath = "(//button[contains(@class,'btn btn--primary btn--full-wid')])[2]") })
	private WebElement emailclick;
	

	@FindAll({ @FindBy(id = "signup_password"),
			@FindBy(xpath = "(//input[@class='form-control form-control--outline'])[4]") })
	private WebElement regpass;

	@FindBys({ @FindBy(id = "signup-button"),
			@FindBy(xpath = "(//button[contains(@class,'btn btn--primary btn--full-wid')])[2]") })
	private WebElement passclick;

}
