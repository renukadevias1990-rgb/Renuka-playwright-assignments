
import{test,expect} from "@playwright/test";
import { TIMEOUT } from "node:dns";

test("servicenow iphone order",async({page})=>{

    await page.goto("https://dev304842.service-now.com/login.do");
    await page.locator(`//input[@id="user_name"]`).fill("admin");
    await page.locator(`//input[@id="user_password"]`).fill("T3REAv8g@lo@");
    await page.locator(`//button[text()="Log in"]`).click();
    await page.locator(`//div[aria-label="All"]`).click();
    await page.locator(`#filter`).fill("Service Catalog");
    await page.getByText("Service Catalog").nth(1).click();
    const frame= page.frameLocator(`//iframe[@id="gsft_main"]`);
    await frame.locator('//a[@aria-label="Mobiles. Cell phones to meet your business needs."]/h2').click()
    await frame.locator(`//strong[text()="Apple iPhone 13"]`).click();
    await frame.locator(`//label[text()="No"]/preceding-sibling::input`).check();
    const dropdownoptions= frame.locator(`//select[@class="form-control cat_item_option "]`);
    const optionscount = await dropdownoptions.locator('option').count();
    console.log("Total count:",optionscount);
    await dropdownoptions.selectOption({ label: '500 MB [$1.00]' });
    const colour=  frame.locator(`//label[text()="Starlight"]`);
    await expect(colour).toBeVisible();
    await colour.click();
    const storage= frame.locator(`//label[text()="256 GB [add $100.00]"]`);
    await expect(storage).toBeVisible();
    await storage.click();
    await frame.locator(`//button[@id="oi_order_now_button"]`).click();
    await expect(frame.locator(`//span[text()="Thank you, your request has been submitted"]`)).toBeVisible();
    await expect(frame.locator('#requesturl')).toBeVisible();
   console.log("Page URL:", page.url());
})