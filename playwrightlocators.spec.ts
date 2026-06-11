import{test,expect} from "@playwright/test";

// test("create a lead",async({page})=>{

//     await page.goto("http://leaftaps.com/opentaps/control/main");
//     await page.locator(`//input[@id="username"]`).fill("democsr2");
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`  //a[contains(text(),"CRM/SFA")]`).click();
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
//     await page.locator(`//a[contains(text(),"Find Leads")]`).click();
//     await page.locator(`(//input[@name="firstName"])[3]`).fill("Renuka");
//     await page.locator(`//button[contains(text(),"Find Leads")]`).click();
//     await page.locator(`(//a[contains(text(),12590)])[1]`).click();
//     await page.locator(`//div[text()="View Lead"]`).click();
//     const companyname=await page.locator("#viewLead_companyName_sp").textContent();
//     const firstName=await page.locator("#viewLead_firstName_sp").textContent();
//     const lastName=await page.locator("#viewLead_lastName_sp").textContent();
//     const status=await page.locator("#viewLead_statusId_sp").textContent();
//     console.log("companyname",companyname);
//     console.log("firstName",firstName);
//     console.log("lastName",lastName);
//     console.log("status",status);

// })

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
//     await page.locator(`(//a[contains(text(),12590)])[1]`).click();
//     // await page.locator('(//a[@class="linktext"])[4]').waitFor();
//     // await page.locator('(//a[@class="linktext"])[4]').click();
//     await page.locator(`//a[contains(text(),"Edit")]`).click();
//     await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill("abcd");
//     await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill("revenue12");
//     await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill("dept1");
//     await page.locator(`//*[@id="updateLeadForm_description"]`).fill("testing");
//     await page.locator(`//input[@value="Update"]`).click();
//     const companyname = page.locator(`//input[@id="updateLeadForm_companyName"]`);
//     const annualrevenue= page.locator(`//input[@id="updateLeadForm_annualRevenue"]`);
//     const departmentname= page.locator(`//input[@id="updateLeadForm_departmentName"]`);
//     const description = await page.locator(`//*[@id="updateLeadForm_description"]`);
//     console.log("companyname",companyname);
//     console.log("annualrevenue",annualrevenue);
//     console.log("departmentname",departmentname);
//     console.log("description",description);

// })

test("create a new account",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("password").fill("TestLeaf@2025");
    await page.getByRole("button",{name:"Log In"}).click();
    await expect(page).toHaveTitle(/Salesforce/);
    await expect(page).toHaveURL(/.*lightning\/page\/home/);
    await page.locator(`//div[@class="slds-icon-waffle"]`).click();
    await page.getByRole('button', { name: 'View All Applications' }).click();
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.waitForTimeout(3000);
    await page.locator(`(//mark[text()="Service"])[1]`).click();
    await page.locator(`[title="Accounts"]`).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:"New"}).click();
    await page.locator(`[name="Name"]`).fill("XYZ");
    await page.locator('//button[@name="SaveEdit"]').click();
    await expect(page.locator('//span[contains(@class,"toastMessage")]')).toContainText("Account");;
})
