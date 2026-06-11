import{test,expect} from "@playwright/test";

test("checkbox validation",async({page})=>{

    await page.goto("https://leafground.com/checkbox.xhtml");
    await page.locator(`(//div[contains(@class,"ui-chkbox-box")])[1]`).click();
    await page.locator(`(//div[contains(@class,"ui-chkbox-box")])[2]`).click();
    //await page.waitForTimeout(3000);
    await expect(page.locator('//span[text()="Checked"]')).toBeVisible();
    await page.locator('(//div[contains(@class,"ui-chkbox-box")])[3]').click();
    await page.locator(`(//div[contains(@class,"ui-chkbox")])[6]`).click();
    await page.locator(`//div[@class="ui-toggleswitch-slider"]`).click();
    await expect(page.locator(`//span[text()="Checked"]`)).toBeVisible();
    await page.waitForTimeout(5000);
    await expect(page.locator(`//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled"]`)).toBeVisible();
    await page.locator(`//div[@class="ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right"]`).click();
    await page.locator(`(//label[text()="London"])[2]`).click();
})
