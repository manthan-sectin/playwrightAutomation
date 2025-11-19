import { test, expect } from '@playwright/test';

test.only('window handle', async ({ browser }) =>  {


    const context=await browser.newContext();
    const page=await context.newPage();
    const username=page.locator('#username');

   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const documentLink=page.locator('a.blinkingText').first();


   const [newPage] =await Promise.all([
   context.waitForEvent('page'),
   documentLink.click(),
   ])


   const text=await newPage.locator('.red').first().textContent();
   const arrayText = text.split("@")
   const domain = arrayText[1].split(" ")[0]

   await page.locator("#username").fill(domain);

   console.log(await page.locator('#username').inputValue());

});