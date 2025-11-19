const { test, expect } = require('@playwright/test');


test('Get by role', async({page}) => {
     const email = "manthan34@gmail.com";
   const products = page.locator('.card-body');
   const productName = 'ZARA COAT 3';

    await page.goto('https://rahulshettyacademy.com/client');

    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your passsword').fill("Sectin90@#");
    await page.getByRole('button',{name:"login"}).click();
    

    await page.locator('.card-body b').first().waitFor();
    await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:"Add to Cart"}).click();

    await page.locator("//button[@class='btn btn-custom']").nth(2).click();


    await page.locator('div li').first().waitFor();

    expect (await page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole('button',{name:"Checkout"}).click();


});