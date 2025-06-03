import { test, expect } from "@playwright/test";

const userName = "ot";
const userEmail = "ot@gmail.com";

const basePage = "await page.goto('https://coffee-cart.app/')";
test.beforeEach(async ({ page }) => {
  await page.goto(basePage);
});

test.describe(`Tests related to filling in the basket with random products and submitting the order`, () => {
  test(
    `CTF-001 Add several random products into a Cart and select 'I'll Skip' option`,
    { tag: "@smoke @CTF-001" },
    async ({ page }) => {
      await page.locator(`[aria-label="Cappuccino"]`).click();
      await page.locator(`[data-test][aria-label="Espresso"]`).click();
      await page.locator(`[aria-label="Espresso Macchiato"]`).click();
      await expect(page.locator(".promo")).toBeVisible();
      await page.getByRole("button", { name: "Nah, I'll skip." }).click();
    }
  );

  test(
    `CTF-002 Add several random products into a Cart and select 'Yes of course' option`,
    { tag: "@smoke @CTF-002" },
    async ({ page }) => {
      await page.locator('[data-test="Cafe_Latte"]').click();
      await page.locator('[data-test="Espresso_Con Panna"]').click();
      await page.locator('[data-test="Cafe_Breve"]').click();
      await expect(page.locator(".promo")).toBeVisible();
      await page.locator("button.yes").click();
    }
  );

  test(
    `CTF-003 Fill in Submit form and submit - Positive`,
    { tag: "@smoke @CTF-003" },
    async ({ page }) => {
      await page.locator('[data-test="Cafe_Latte"]').click();
      await page.locator('[data-test="checkout"]').click();
      await page.locator("#name").fill(userName);
      await page.locator("#email").fill(userEmail);
      await page.locator('button[id="submit-payment"]').click();
      await expect(
        page.getByRole("button", { name: "Thanks for your purchase." })
      ).toBeVisible();
    }
  );

  test(
    "CTF-004 Fill in Submit form and submit - Negative Assertions",
    { tag: "@smoke @CTF-004" },
    async ({ page }) => {
      //Make sure the Submit button is still available if it's clicked when Name and Email fields are blank
      await page.locator('[data-test="checkout"]').click();
      await page.locator('button[id="submit-payment"]').click();
      expect(page.getByRole("button", { name: "Submit" })).toBeVisible();

      //Make sure the Submit button is still available if it's clicked when Email field is left blank
      await page.locator('input[id="name"]').fill(userName);
      await page.locator('button[id="submit-payment"]').click();
      expect(page.getByRole("button", { name: "Submit" })).toBeVisible();

      //Make sure the Submit button is still available if it's clicked when Name field is left blank
      await page.locator('input[id="name"]').clear();
      await page.locator('button[id="submit-payment"]').click();
      await page.locator('input[id="email"]').pressSequentially(userEmail);
      await page.locator('button[id="submit-payment"]').click();
      expect(page.locator('button[id="submit-payment"]')).toBeVisible();

      //Close the Submit form
      await page.locator("button.close").click;
    }
  );
  test(
    "CTF-005 Fill in Submit form and submit - Negative Assertions",
    { tag: "@smoke @CTF-004" },
    async ({ page }) => {  
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.getByRole('link', { name: 'Cart page' }).click();
    await page.locator(`//*[text()='Espresso']/parent::li//button[text() = '+']`).click();
    await page
    .locator("button[area-label *= 'Espresso'] >> visible=true" {
      hasText: "+", 
    }).click();

    await page.getByRole('button', { name: 'Add one Espresso Macchiato' }).click();
    await page.getByRole('button', { name: 'Remove one Espresso Macchiato' }).click();
    await page.getByRole('button', { name: 'Remove one Espresso Macchiato' }).click();
    await page.getByRole('button', { name: 'Remove one Espresso Macchiato' }).click();
    await expect(page.locator('div').filter({ hasText: /^No coffee, go add some\.$/ })).toBeVisible();
    await page.goto('https://coffee-cart.app/cart');
    await page.goto('https://coffee-cart.app/cart');
await page.locator('[data-test="Mocha"]').click();
await page.getByRole('listitem').filter({ hasText: 'cart (1)' }).click();
await page.getByRole('listitem').filter({ hasText: 'menu' }).click();
await page.getByRole('listitem').filter({ hasText: 'cart (1)' }).click();

await expect(page.getByText('No coffee, go add some.')).toBeVisible();
await page.goto('https://coffee-cart.app/cart');
await page.goto('https://coffee-cart.app/cart');/";
});
