const { test, expect } = require('@playwright/test');

test.only('End to end Automation', async ({ page }) => {


   const email = "manthan34@gmail.com";
   const products = page.locator('.card-body');
   const productName = 'ZARA COAT 3';


   await page.goto('https://rahulshettyacademy.com/client');

   await page.locator('#userEmail').fill(email);
   await page.locator('#userPassword').fill("Sectin90@#");
   await page.locator('#login').click();
   await page.locator("//h3[text()='Automation']").waitFor();

   await page.locator('.card-body b').first().waitFor();
   const titles = await page.locator('.card-body b').allTextContents();
   console.log(titles);

   const count = await products.count();


   // for(let i=0;i<count;++i){
   // if(products.nth(i).locator("b").textContent === productName ){

   //     await products.nth(i).locator("text= Add To Cart").click();
   //     break;
   // }

   // }

   for (let i = 0; i < count; ++i) {
      const name = await products.nth(i).locator("b").textContent();
      if (name.trim() === productName) {
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }


   await page.locator('[routerlink*=cart]').click();

   await page.locator("[routerlink='/dashboard']").last().waitFor();

   await expect(page.locator("//h3[text()='ZARA COAT 3']")).toBeVisible();

   await page.locator("//button[text()='Checkout']").click();

   await page.locator("//select[@class='input ddl']").first();

   await page.selectOption("//select[@class='input ddl'][1]", { index: 3 });

   await page.locator("//select[@class='input ddl']").last();

   await page.selectOption("//select[@class='input ddl'][2]", { index: 28 });

   await page.locator("//input[@class='input txt']").first().fill("345");

   await page.locator("//input[@class='input txt']").last().fill("Manthan Mali");

   //await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 

   await page.locator("//input[@class='input txt text-validated']").last().pressSequentially("ind", { delay: 150 });

   await page.locator("//span[text()=' India']").click();

   // const dropdown = page.locator(".ta-results").first();

   // await dropdown.waitFor();

   // const optionCount = dropdown.locator("button").count();

   // for (let i = 0; i < optionCount; ++i) {

   //    const text = await dropdown.locator("button").nth(i).textContent();
   //    if (text === " India") {

   //       await dropdown.locator("button").nth(i).click();
   //       break;
   //    }
   // }

   await expect(page.locator("//label[text()='manthan34@gmail.com']")).toHaveText("manthan34@gmail.com");
   await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click();

   await page.locator("label[class='ng-star-inserted']").waitFor();
   await expect(page.locator("//h1[@class='hero-primary']")).toHaveText(" Thankyou for the order. ");

   console.log(await page.locator("label[class='ng-star-inserted']").textContent());
});