package org.step_definition;

import java.sql.Driver;
import java.util.List;
import java.util.Map;

import org.home.Home_Page;
import org.home.Login;
import org.home.reg;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.runner_class.Zulily_Runner;
import org.util.Base_Class;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Zuily_Step_Definition extends Base_Class {
	Login l;
	reg r;

	@Given("The user should be in Zulily login page")
	public void the_user_should_be_in_Zulily_login_page() throws InterruptedException {

	}

	@When("The user have to click the Sigin button")
	public void the_user_have_to_click_the_Sigin_butto() {
		l = new Login();
		clickWait(l.getSigin());
	}

	@When("the user has to enter username and password in the field")
	public void the_user_has_to_enter_username_and_password_in_the_field(io.cucumber.datatable.DataTable data) {
		l = new Login();
		List<Map<String, String>> mp = data.asMaps(String.class, String.class);
		Map<String, String> map = mp.get(2);
		String email = map.get("username");
		String pass = map.get("userpassword");
		sendKey(l.getEmailfield(), email);
		sendKey(l.getPasswordfield(), pass);
	}

	@When("The user have to click the {string} button")
	public void the_user_have_to_click_the_button(String data) {
		l = new Login();
		reg r = new reg();

		if (data.equals("Sigin")) {
			clickWait(l.getSigin());
		} else if (data.equals("emailclick")) {
			clickWait(r.getEmailclick());
		} else if (data.equals("passclick")) {
			clickWait(r.getPassclick());

		} else if (data.equals("shopnow")) {
			clickWait(l.getShopnow());

		} else if (data.equals("newmember"))
			clickWait(r.getNewmember());

		

	}

	@Then("user can to see error message {string} on the screen")
	public void user_can_to_see_error_message_on_the_screen(String msg) {
		l = new Login();

		System.out.println(getText(l.getFailuremsg()));
		if (l.getEmailfield().equals(l.getFailuremsg())) {
			Assert.assertEquals("assert work ", l.getFailuremsg(), msg);

		}

	}

}
