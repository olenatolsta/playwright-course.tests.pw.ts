import { test, expect } from "@playwright/test";

test("Playwright dev testing", { tag: '@smoke @PLR-001'}, async ({ page }) => {
  test.step("Playwright dev open", async ({}) => {
    await page.goto('https://playwright.dev/');
  });
  
  test.step("Navigate through the web-site", async ({}) => {
    await page.getByRole("link", { name: "Docs" }).click();
    await page
      .getByRole("link", { name: "Writing tests", exact: true })
      .click();
    await page.getByRole("link", { name: "Community" }).click();
    await page.getByRole("button", { name: "Search (Ctrl+K)" }).click();
    await page.getByRole("searchbox", { name: "Search" }).fill("functions");
    await page.getByRole("link", { name: "Function throws an error" }).click();
    await page
      .getByRole("link", { name: "Playwright logo Playwright" })
      .click();
  });

  test.step("Perform some assertions", async ({}) => {
    await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
    await expect(
      page.getByRole("img", { name: "Browsers (Chromium, Firefox," })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Star microsoft/playwright on" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "72k+ stargazers on GitHub" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "72k+ stargazers on GitHub" })
    ).toBeVisible();
  });
});
