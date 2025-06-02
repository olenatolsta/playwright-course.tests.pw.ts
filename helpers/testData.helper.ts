import { Page, Locator } from '@playwright/test';

export class testDataHelper{
  protected readonly page: Page;
  public constructor(page: Page){
    this.page = page;
  }
}
/**
 * Generates a unique string of random numbers.
 * @returns {string} Returns a string of random numbers.
 */
export function generateRandomString(): string {
  const time = new Date().getTime();
  const number = Math.floor(Math.random() * 100000);
  return `${time}-${number}`;
}