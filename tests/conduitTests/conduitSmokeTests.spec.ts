import { test, expect } from "@playwright/test";
import * as Data from "../../helpers/testData.helper";

const usernamePart = Data.generateRandomString();
const basePage = `https://demo.learnwebdriverio.com`

test.beforeEach(async ({ page }) => {
    await page.goto(basePage);
});

test("CDT-001 Perform user authentication",
  { tag: "@smoke @CDT-001" },
  async ({ page }) => {
    await page.getByRole("link", { name: ` Sign up` }).click();
    await page.locator('input[placeholder="Username"]').fill(usernamePart);
    await page.locator('input[placeholder="Email"]').fill(usernamePart.concat(`@gmail.com`));
    await page.locator('input[placeholder="Password"]').fill("testtest");
    await page.getByRole("button", { name: "Sign up" }).click();
  }
);

test("CDT-002 Perform user login",
  { tag: "@smoke @CDT-002" },
  async ({ page }) => {
    await page.getByRole("link", { name: ` Sign in` }).click();
    await page.locator('input[placeholder="Email"]').fill(usernamePart.concat(`@gmail.com`));
    await page.getByRole("textbox", { name: "Password" }).fill("testtest");
    await page.getByRole("button", { name: "Sign in" }).click();
    //expect (await page.getByText(usernamePart)).toBeVisible();
  }
);

/*
test(
  "CDT-002 Create a new article",
  { tag: "@smoke @CDT-002" },
  async ({ page }) => {
    await page.locator(`a[href='/editor']`).click();
    //await page.locator('a[href="/editor"]').click();
    await page.getByRole("textbox", { name: "Article Title" }).click();
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill("How to fail testing");
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .click();
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .fill("");
    await page.getByRole("textbox", { name: "Article Title" }).click();
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill("Reporting ");
    await page.getByRole("textbox", { name: "Article Title" }).click();
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill("Data visualization");
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .click();
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .fill(generateRandomString());
    await page.locator(".v-note-edit").click();
    await page.locator(".v-note-edit").click();
    await page
      .getByRole("textbox", { name: "Write your article (in" })
      .fill(
        "для решения проблемы анализа накопленных данных и существуют всевозможные комплексы по консолидации и ...\n"
      );
    await page.getByRole("textbox", { name: "Enter tags" }).click();
    await page
      .getByRole("textbox", { name: "Enter tags" })
      .fill("Data visualization, dashboards, reporting");
    await page.getByRole("button", { name: "Publish Article" }).click();
  }
);

test(
  "CDT-003 Edit the newly created article",
  { tag: "@smoke @CDT-003" },
  async ({ page }) => {
    await page.getByRole("link", { name: "  Edit Article" }).first().click();
    await page.getByRole("textbox", { name: "Write your article (in" }).click();
    await page
      .getByRole("textbox", { name: "Write your article (in" })
      .press("ControlOrMeta+a");
    await page
      .getByRole("textbox", { name: "Write your article (in" })
      .fill("");
    await page.locator(".v-note-edit").click();
    await page
      .getByRole("textbox", { name: "Write your article (in" })
      .fill("Test article");
    await page.getByRole("button", { name: "Publish Article" }).click();
  }
);

test(
  "CDT-004 Add a comment to the article",
  { tag: "@smoke @CDT-003" },
  async ({ page }) => {
    await page.getByRole("textbox", { name: "Write a comment..." }).click();
    await page
      .getByRole("textbox", { name: "Write a comment..." })
      .fill(
        "Humpy Dumpty set on the wall, Humpty Dumpty had a great fall. All the kings forces and all the kings men cannot put Humpty tohether again"
      );
    await page.getByRole("button", { name: "Post Comment" }).click();
  }
);

test(
  "CDT-005 Edit and safe Profile Settings",
  { tag: "@smoke @CDT-005" },
  async ({ page }) => {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "conduit" })
      .click();
    await page.locator(".btn").first().click();
    await page
      .getByRole("listitem")
      .filter({ hasText: "tea" })
      .getByRole("link")
      .click();
    await page.getByRole("link", { name: " Edit Profile Settings" }).click();
    //await page.getByRole('textbox', { name: 'Short bio about you' }).click();
    await page
      .getByRole("textbox", { name: "Short bio about you" })
      .fill("Вьіжила");
    await page.getByRole("button", { name: "Update Settings" }).click(); 
  }
    */
