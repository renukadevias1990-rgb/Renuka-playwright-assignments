 import{test,expect} from "@playwright/test";

// //Create a lead
// test("salesforce Applications",async({page})=>{
    
//     await page.goto("https://login.salesforce.com/");
//     await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
//     await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025");
//     await page.locator(`//input[@name="Login"]`).click();
//     await page.locator(`//button[@title="App Launcher"]`).click();
//     await page.locator('//button[text()="View All"]').click();
//     await page.getByPlaceholder("Search apps or items...").fill("Sales");
//     await page.locator(`(//p[contains(@class,"al-app-tile-description")])[2]`).click();
//     await page.locator(`//a[@title="Leads"]`).click();
//     await page.locator(`//a[@title="New"]`).click();
//     await page.locator(`//button[@aria-label="Salutation"]`).click();
//     await page.locator(`//span[@title="Prof."]`).click();
//     await page.locator(`//input[@name="lastName"]`).fill("abc");
//     await page.locator(`//input[@name="Company"]`).fill("kanini");
//     await page.locator(`(//button[text()="Save"])[2]`).click();
//     //await page.waitForTimeout(3000);
//     await expect(page.locator('//lightning-formatted-name')).toContainText("abc");
   
// })

// test("Edit a lead",async({page})=>{

//     await page.goto("https://login.salesforce.com");
//     await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
//     await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025");
//     await page.locator(`//input[@name="Login"]`).click();
//     await page.locator(`//button[@title="App Launcher"]`).click();
//     await page.locator(`//button[@aria-label="View All Applications"]`).click();
//     await page.getByPlaceholder("Search apps or items...").fill("Sales");
//     await page.locator(`(//p[contains(@class,"al-app-tile-description")])[2]`).click();
//     await page.locator(`//a[@title="Leads"]`).click();
//     await page.locator(`//a[@title="kanini"]`).first().click();
//     await page.locator(`//button[@name="Edit"]`).click();
//     await page.locator(`//button[@aria-label="Salutation"]`).click();
//     //await page.waitForTimeout(3000);
//     await page.locator(`//span[@title="Mx."]`).waitFor({ state: "visible" });
//     await page.locator(`//span[@title="Mx."]`).click();
//     await page.getByPlaceholder("Last Name").fill("abcd");
//     await page.locator(`//button[@name="SaveEdit"]`).click();
//     const toastMessage = page.locator('//span[contains(@class,"toastMessage")]');
//     await expect(toastMessage).toContainText("was saved");

// })

// Create Individuals 

// test("verify user is creating Individuals",async({page})=>{
    
//     await page.goto("https://login.salesforce.com");
//     await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
//     await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025");
//     await page.locator(`//input[@name="Login"]`).click();
//     await page.locator(`//button[@title="App Launcher"]`).click();
//     await page.waitForTimeout(3000);
//     await page.locator(`//button[@aria-label="View All Applications"]`).click();
//     //await page.waitForTimeout(5000);
//     await page.getByPlaceholder("Search apps or items...").fill("Individuals");
//     //await page.waitForTimeout(3000);
//     await page.locator(`//mark[(text()="Individuals")]`).click();
//     //await page.locator('//a[@title="Show more actions"]').click();
//     //await page.getByText("New Individual").click();
//     await page.locator(`//div[@title="New"]`).click();
//     await page.getByPlaceholder("Last Name").fill("abc");
//     await page.locator(`//span[text()="Save"]`).click();
//     const individualname= await page.getByPlaceholder("Last Name");
//     await individualname.fill("abc");
//     await expect(individualname).toBeVisible();

// })

//edit Individuals

test("Verify user edits the Individuals",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`//input[@id="password"]`).fill("TestLeaf@2025");
    await page.locator(`//input[@id="Login"]`).click();
    await page.locator(`button[title="App Launcher"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`button[aria-label="View All Applications"]`).click();
    await page.getByPlaceholder("Search apps or items...").fill("Individuals");
    await page.locator('//mark[text()="Individuals"]').click();
    await page.waitForTimeout(3000);
    await page.locator(`//input[@aria-label="Search this list..."]`).fill("abc");
    await page.keyboard.press("Enter");
    await page.locator(`//span[text()="abc"]`).click();
    await page.locator(`//div[@title="Edit"]`).click();
    await page.waitForTimeout(3000);
    //await page.locator(`//button[@aria-label='Salutation']`).waitFor({state:"visible" });
    await page.locator(`//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]`).click();
await page.locator(`//a[@title="Mx."]`).click();
    await page.locator(`//input[@placeholder="First Name"]`).fill("Renu");
    await page.locator(`//span[text()="Save"]`).click();
    const firstname =page.locator(`//input[@placeholder="First Name"]`)
    await expect(firstname).toBeVisible();


})