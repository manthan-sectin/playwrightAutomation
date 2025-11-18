
import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.locator('#customerCurrency').click();
  await page.selectOption('#customerCurrency',{index: 1});
  const textContent=await page.locator("//option[text()='Euro']").textContent();
  await expect(textContent).toContain('Euro');
});