package org.home;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.util.Base_Class;

public class Login extends Base_Class {

	public Login() {

		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//a[text()='Already a Member?  Sign In']")
	private WebElement Sigin;

	public WebElement getSigin() {
		return Sigin;
	}

	@FindBy(xpath = "//input[@id='signin_email']")
	private WebElement emailfield;

	public WebElement getEmailfield() {
		return emailfield;
	}

	@FindBy(xpath = "//input[@id='signin_password']")
	private WebElement passwordfield;

	public WebElement getPasswordfield() {
		return passwordfield;
	}
	
	@FindBy(xpath = "//button[@value='Login']")
	private WebElement shopnow;

	public WebElement getShopnow() {
		return shopnow;
	}
	@FindBy(xpath = "(//p[@class='text-danger err-msg'])[1]")
	private WebElement failuremsg;

	public WebElement getFailuremsg() {
		return failuremsg;
	}
	
	
	
}
