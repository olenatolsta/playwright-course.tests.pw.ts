import { Locator, Page } from "@playwright/test";
import { BaseHelper } from "../helpers/base.helper";

export class DemoqaTextboxesPage extends BaseHelper {
public readonly fullName: Locator;
public readonly emailTextField: Locator;
public readonly currentAddress;
public readonly permanentAddress;
public readonly submitButton;

  public constructor(page: Page) {
    super(page);

    this.fullName = page.locator('//input[@placeholder="Full Name"]');
    this.emailTextField = page.locator('//input[@type="email"]');
    this.currentAddress = page.locator('//textarea[@placeholder="Current Address"]');
    this.permanentAddress = page.locator('//textarea[@id="permanentAddress"]');
    this.submitButton = page.locator('//button[text()="Submit"]');
  }
}
