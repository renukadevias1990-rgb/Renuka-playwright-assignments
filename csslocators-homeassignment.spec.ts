import{test,expect} from "@playwright/test";

test("create a lead",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator(`//input[@id="username"]`).fill("democsr2");
await page.locator(`//input[@id="password"]`).fill("crmsfa");
await page.locator(`//input[@value="Login"]`).click();
await page.locator(`//a[contains(text(),"CRM/SFA")]`).click();
await page.locator(`//a[contains(text(),"Leads")]`).click();
await page.locator(`//a[text()="Create Lead"]`).click();
await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("abc");
await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Renuka");
await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("as");
await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("salutation1");
await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill("title1");
await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill("revenue1");
await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill("dept1");
await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill("123456789");
await page.locator(`//input[@value="Create Lead"]`).click();
const title= await page.title();
console.log("await page.title");

})