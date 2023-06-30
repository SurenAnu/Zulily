package org.step_definition;

import java.util.List;
import java.util.Map;

import org.home.*;
import org.util.Base_Class;

import io.cucumber.java.en.When;

public class Registation_Page extends Base_Class {
static  reg r =  new reg();
	@When("user enter the create the new email {string}id in the field")
	public void user_enter_the_create_the_new_email_id_in_the_field(String user) {
		 
		sendWait(r.getRegemail(), user);
	}
	

	@When("user able to enter the password in the field")
	public void user_able_to_enter_the_password_in_the_field(io.cucumber.datatable.DataTable value) {
		 reg r =  new reg();
		
		List<String> s = value.asList();
		String v1 = s.get(0);
		String v2 = s.get(1);
//		System.out.println(v1);
//		System.out.println(v2);
		sendWait(r.getRegpass(), v2);
		System.err.println("req");
	}
}
