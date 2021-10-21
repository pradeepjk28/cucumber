package com.telecom.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//resources//features//AddTariffPlan.feature",
					 glue = "com.telecom.stepdefinition",
				   plugin = "html:target//report.html",
			   monochrome = true, 
				   dryRun = false,
				     tags = {"@list,@cus"})

public class TestRunner {

}
