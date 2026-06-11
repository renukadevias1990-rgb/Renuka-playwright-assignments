import{test,expect} from "@playwright/test";

test("radio button selection",async({page})=>{

    await page.goto("https://leafground.com/radio.xhtml");
    await page.locator(`(//label[text()="Safari"])[2]`).click();
    await expect(page.locator(`(//label[text()="Safari"])[2]`)).toBeVisible();
    await page.locator(`(//label[text()="Chrome"])[1]`).click();
    await expect(page.locator(`(//label[text()="Chrome"])[1]`)).toBeVisible();
    await page.locator(`//label[text()="Chennai"]`).click();
    await page.locator(`//label[text()="21-40 Years"]`).click();
    await expect(page.locator(`//label[text()="21-40 Years"]`)).toBeVisible();
})

