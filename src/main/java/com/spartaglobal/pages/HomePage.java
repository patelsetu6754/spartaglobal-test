package com.spartaglobal.pages;

import com.spartaglobal.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {// Inheritance concept by extending utility
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());//creation of log method

    public HomePage() {
        PageFactory.initElements(driver, this);//call page factory class

    }

    @CacheLookup//to store element and memory to run test quicker
    @FindBy(xpath = "//div[@id='cookiescript_accept']")//locator , with FindBy- find element from web
    WebElement cookies;//object name

    @CacheLookup//to store element and memory to run test quicker
    @FindBy(xpath = "//a[normalize-space()='For individuals']")//locator , with FindBy- find element from web
    WebElement forIndividuals;//object name

    @CacheLookup//to store element and memory to run test quicker
    @FindBy(xpath = "//span[normalize-space()='Become']")//locator , with FindBy- find element from web
    WebElement verifyMessage;//object name

    @CacheLookup//to store element and memory to run test quicker
    @FindBy(xpath = "//span[normalize-space()='a']")//locator , with FindBy- find element from web
    WebElement verifyMessage1;//object name

    @CacheLookup//to store element and memory to run test quicker
    @FindBy(xpath = "//span[normalize-space()='Spartan']")//locator , with FindBy- find element from web
    WebElement verifyMessage2;//object name

    public void clickOnCookies() {//method creation - this method click on accept alert
        clickOnElement(cookies);
        log.info("Clicking on Cookies : " + cookies);
    }

    public void clickOnForIndividuals() {
        mouseHoverAndClickOnElement(forIndividuals);
        log.info("Clicking on For individuals : " + forIndividuals);
    }

    public String getVerifyMessage() {// this method creation of verifying text
        String message = getTextFromElement(verifyMessage);
        log.info("Getting text from : " + verifyMessage.toString());
        return message;
    }

    public String getVerifyMessage1() {// this method creation of verifying text
        String message = getTextFromElement(verifyMessage1);
        log.info("Getting text from : " + verifyMessage1.toString());
        return message;
    }

    public String getVerifyMessage2() {// this method creation of verifying text
        String message = getTextFromElement(verifyMessage2);
        log.info("Getting text from : " + verifyMessage2.toString());
        return message;
    }
}