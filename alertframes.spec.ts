import{test,expect} from "@playwright/test";

test("Handling alerts",async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.on("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();
    });
    const frame= page.frameLocator(`//iframe[@id="iframeResult"]`);
    await frame.locator(`//button[text()="Try it"]`).click();
    const result= await frame.locator(`//p[@id="demo"]`).textContent();
    await expect(frame.locator(`//p[@id="demo"]`)).toHaveText("You pressed OK!");
    console.log("Result:",result);

})


