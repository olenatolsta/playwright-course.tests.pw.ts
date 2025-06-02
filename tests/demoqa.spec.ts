import { test, expect } from "@playwright/test";
import { DemoqaTextboxesPage } from "../pageObjects/demoqaTextBoxes.page";

test.describe("Learn to prepare XPath for Demoqa web-site", () => {
  test.beforeEach(async ({ page, context }) => {
    //Blocking ads
    await context.route(/ads/, (route) => route.abort());
  });

  test(
    "dqa-001 Fill in a form with text box",
    { tag: "@smoke @dqa-001" },
    async ({ page }) => {
      await page.goto("https://demoqa.com/text-box");

      //Fill in a Full Name field
      const fullNameLoc = page.locator('//input[@placeholder="Full Name"]');
      const fullName = "Olena Tolsta";
      await fullNameLoc.fill(fullName);

      //Fill in an email
      const emailTextField = page.locator('//input[@type="email"]');
      const emailText = "olena.tolsta@gmail.com";
      await emailTextField.fill(emailText);

      //Fill in a Current Address
      const currentAddressLoc = page.locator(
        '//textarea[@placeholder="Current Address"]'
      );
      const currentAddress = "Somestrasse 4";
      await currentAddressLoc.fill(currentAddress);

      //Fill in a Permanent Address
      const permanentAddressLoc = page.locator(
        '//textarea[@id="permanentAddress"]'
      );
      const permanentAddress = "Somepermanent address 5";
      await permanentAddressLoc.fill(permanentAddress);

      //Click Submit
      const submitButton = page.locator('//button[text()="Submit"]');
      await submitButton.click();

      //Assertions
      await expect(page.locator('//p[@id="name"]')).toContainText(fullName);
      await expect(page.locator('//p[@id="email"]')).toContainText(emailText);
      await expect(page.locator('//p[@id="currentAddress"]')).toContainText(
        currentAddress
      );
      await expect(page.locator('//p[@id="permanentAddress"]')).toContainText(
        permanentAddress
      );
    }
  );

  test(
    "dqa-002 Click on Radio-buttons",
    { tag: "@smoke @dqa-002" },

    async ({ page }) => {
      await page.goto("https://demoqa.com/radio-button");

      //Select Yes
      const yesRadio = page.locator('//label[@for="yesRadio"]');
      await yesRadio.click();

      //Make sure the proper text appears
      await expect(page.locator('//span[text()="Yes"]')).toBeVisible();

      //Select Impressive
      const impressiveRadio = page.locator('//label[@for="impressiveRadio"]');
      await impressiveRadio.click();

      //Make sure the proper text appears
      await expect(page.locator('//span[text()="Impressive"]')).toBeVisible();

      //Make sure that it's impossible to click on "No"
      const noRadio = page.locator('//label[@for="noRadio"]');
      await expect(noRadio).toBeDisabled();
    }
  );

  test(
    "dqa-002 Click on Radio-buttons",
    { tag: "@smoke @dqa-002" },

    async ({ page }) => {
      await page.goto("https://demoqa.com/checkbox");

      //Select Yes
      const yesRadio = page.locator('//label[@for="yesRadio"]');
      await yesRadio.click();

      //Make sure the proper text appears
      await expect(page.locator('//span[text()="Yes"]')).toBeVisible();

      //Select Impressive
      const impressiveRadio = page.locator('//label[@for="impressiveRadio"]');
      await impressiveRadio.click();

      //Make sure the proper text appears
      await expect(page.locator('//span[text()="Impressive"]')).toBeVisible();

      //Make sure that it's impossible to click on "No"
      const noRadio = page.locator('//label[@for="noRadio"]');
      await expect(noRadio).toBeDisabled();
    }
  );
});
