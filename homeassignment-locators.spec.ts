import{test,expect} from "@playwright/test";
//Create a Lead
// test("create a lead",async({page})=>{
  
//     await page.goto("https://leaftaps.com/opentaps/control/main");
//     await page.locator(`//input[@id="username"]`).fill("democsr2");
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//*[contains(text(),'CRM/SFA')]`).click();
//     await page.locator(`//a[text()="Leads"]`).click(); 
//     await page.locator(`//a[text()="Create Lead"]`).click();
//     await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("abc");
//     await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Renuka");
//     await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("as");
//     await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("salutation1");
//     await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill("title");
//     await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill("revenue1");
//     await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill("dept1");
//     await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill("123456789");
//     await page.locator(`//input[@value="Create Lead"]`).click();
//     await page.waitForTimeout(3000);
//     await expect(page.locator(`//input[@id="createLeadForm_companyName"]`)).toHaveValue("abc");
//     await expect(page.locator(`//input[@id="createLeadForm_firstName"]`)).toHaveValue("Renuka");
//     await expect(page.locator(`//input[@id="createLeadForm_lastName"]`)).toHaveValue("as");

// })

//Edit a Lead 

// test("Edit a lead",async({page})=>{

//     await page.goto("https://leaftaps.com/opentaps/control/main");
//     await page.locator(`//input[@id="username"]`).fill("democsr2");
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//*[contains(text(),'CRM/SFA')]`).click();
//     await page.locator(`//a[text()="Leads"]`).click();
//     await page.locator(`//a[contains(text() ,'Find Leads')]`).click();
//     await page.locator(`(//input[@name='firstName'])[3]`).fill("Renuka");
//     await page.locator(`//button[contains(text(),"Find Leads")]`).click();
//     await page.locator('(//a[@class="linktext"])[4]').waitFor();
//     await page.locator('(//a[@class="linktext"])[4]').click();
//     await page.locator(`//a[contains(text(),"Edit")]`).click();
//     await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill("abcd");
//     await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill("revenue12");
//     await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill("dept1");
//     await page.locator(`//*[@id="updateLeadForm_description"]`).fill("testing");
//     await page.locator(`//input[@value="Update"]`).click();
//     await expect(page.locator(`//input[@id="updateLeadForm_companyName"]`)).toHaveValue("abcd");
//     await expect(page.locator(`//input[@id="updateLeadForm_annualRevenue"]`)).toHaveValue("revenue12");
//     await expect(page.locator(`//input[@id="updateLeadForm_departmentName"]`)).toHaveValue("dept1");

// })

//create a new account

test("create a new account",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("password").fill("TestLeaf@2025");
    await page.getByRole('button',{name:'Log In'}).click();
    await expect(page).toHaveTitle("Home | Salesforce");
    await expect(page).toHaveURL(/.*lightning\/page\/home/);
    await page.locator(`//div[@class="slds-icon-waffle"]`).click();
    await page.getByRole('button', { name: 'View All Applications' }).click();
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.locator(`(//mark[contains(text(),"Service")])[1]`).click();
    await page.locator(`[title="Accounts"]`).click();
    await page.getByRole('button',{name:"New"}).click();
    await page.locator(`[name="Name"]`).fill("XYZ");
    await page.locator('//button[@name="SaveEdit"]').click();
    await expect(page.locator('//span[contains(@class,"toastMessage")]')).toContainText("Account");;
})
