package com.spartaglobal.steps;

import com.spartaglobal.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I click on 'cookies'$")
    public void iClickOnCookies() {
        new HomePage().clickOnCookies();
    }

    @When("^I mouse hover and click on 'For individuals'$")
    public void iMouseHoverAndClickOnForIndividuals() {
        new HomePage().clickOnForIndividuals();
    }


    @Then("^I should be able to verify message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyMessage(String message) {
        String expectedMessage = "Become";
        String actualMessage = new HomePage().getVerifyMessage();
        Assert.assertEquals("text not displayed", expectedMessage, actualMessage);
    }
    public void iShouldBeAbleToVerifyMessage1(String message1) {
        String expectedMessage = "a";
        String actualMessage = new HomePage().getVerifyMessage();
        Assert.assertEquals("text not displayed", expectedMessage, actualMessage);
    }
    public void iShouldBeAbleToVerifyMessage2(String message2) {
        String expectedMessage = "Spartan";
        String actualMessage = new HomePage().getVerifyMessage();
        Assert.assertEquals("text not displayed", expectedMessage, actualMessage);
    }
}

