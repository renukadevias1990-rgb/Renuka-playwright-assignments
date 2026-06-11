import{test,expect} from "@playwright/test";
import credentails from "../../Data/credentials.json"
import { TIMEOUT } from "node:dns";

test("Create a new lead using data parameterisation",async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator(`//input[@id="username"]`).fill(credentails[0].username)
    await page.locator(`//input[@id="password"]`).fill(credentails[0].password)
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click();
    await page.locator(`//a[text()="Leads"]`).click();
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(credentails[0].CompanyName);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(credentails[0].FirstName);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(credentails[0].LastName);
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:credentails[0].Source});
   await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{label:credentails[0].MarketingCampaign});
   const marketingdropdownvalue = page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/Option`);
   const dropdowncount= await marketingdropdownvalue.count();
   for(let i=0;i<dropdowncount;i++){

    const value=await marketingdropdownvalue.nth(i).innerText();
    console.log('The value of MarketingCampaign is:',value);
   }
   await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index:7});
   //await page.waitForTimeout(50000);
   await page.selectOption( `//select[@id="createLeadForm_currencyUomId"]`, { value: credentails[0].PreferredCurrency });
   await page.selectOption( `//select[@id="createLeadForm_generalCountryGeoId"]`, { label: credentails[0].Country });
   await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{label:credentails[0].State});
   const statedropdownoptions=  page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`);
   const allStates = await statedropdownoptions.allTextContents();
for(const state of allStates){

   console.log('State dropdown option:', state);
}


})