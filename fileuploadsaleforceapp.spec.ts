import{test,expect} from "@playwright/test";

test("upload a file",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025");
    await page.locator(`//input[@id="Login"]`).click();
    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.locator(`//button[@aria-label="View All Applications"]`).click();
    await page.getByPlaceholder("Search apps or items...").fill("Accounts");
    await page.locator(`//mark[text()="Accounts"]`).click();
    await page.locator(`//div[@title="New"]`).click();
    await page.locator(`//input[@name="Name"]`).fill("ICICI");
    await page.locator(`//button[@aria-label="Type"]`).click();
    await page.locator(`//span[@title="Prospect"]`).click();
    await page.locator(`//button[@aria-label="Industry"]`).click();
    await page.locator(`//span[@title="Banking"]`).click();
    await page.locator(`//button[@name="SaveEdit"]`).click();
    const accountheader= page.locator('//lightning-formatted-text').filter({hasText:"ICICI"})
    await expect(accountheader).toBeVisible();
    //await page.waitForLoadState('networkidle');
    await page.keyboard.press('PageDown');
    //await page.locator(`//a[@title="Upload Files"]`) .scrollIntoViewIfNeeded();
    await page.locator(`//span[text()="Upload Files"]`).click();
    await page.waitForSelector(`//input[@type="file"]`);
    await page.locator(`//input[@type="file"]`).first().setInputFiles('Data/PW-W4-FileUpload.pdf');
    await page.locator(`//span[text()="Done"]`).click();
    await page.waitForTimeout(5000);
    await expect(page.getByText("PW-W4-FileUpload.pdf")).toBeVisible();
    //await expect( page.locator(`//a[contains(text(),"PW-W4-FileUpload.pdf")]`)).toBeVisible();

})