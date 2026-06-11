import{test,expect} from "@playwright/test";

test("dropdown selection",async({page})=>{

    await page.goto("https://leafground.com/select.xhtml");
    await page.selectOption("//select[@class='ui-selectonemenu']", { label: "Playwright"})
    const dropdownoptions = page.locator(`//select[@class="ui-selectonemenu"]/option`);
    const count= await dropdownoptions.count();
    console.log("Total options",count);
    for(let i=0;i<count;i++){
        const text= await dropdownoptions.nth(i).textContent();
        console.log(text);
    }
    await page.locator(`(//div[@class="ui-selectonemenu-trigger ui-state-default ui-corner-right"])[1]`).click();
    await page.locator(`//li[text()="USA"]`).click();
    await page.locator(`//span[@class="ui-button-text"]`).click();
    await page.locator(`[data-item-label="Playwright"]`).click();
    await page.locator(`(//div[@class="ui-selectonemenu-trigger ui-state-default ui-corner-right"])[3]`).click();

const language = page.locator(`//ul[@id='j_idt87:lang_items']/li`);

const counts = await language.count();

console.log("Total number of languages:", counts);

for(let i = 0; i < counts; i++){

    const text = await language.nth(i).textContent();

    console.log(text);
}
await page.locator("//li[text()='English']").click();
await page.waitForTimeout(2000);
    await page.locator("(//div[contains(@class,'ui-selectonemenu-trigger')])[4]").click();
})