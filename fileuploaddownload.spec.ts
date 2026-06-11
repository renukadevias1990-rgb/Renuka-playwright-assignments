import{test,expect} from "@playwright/test";
import path from "path";

// test("User uploads a file",async({page})=>{

//     await page.goto("https://the-internet.herokuapp.com/upload");
//    const filepath= path.join(__dirname,"../Data/ClassRoon-PW-W4-File Upload & Download.pdf");
//    await page.locator('#file-upload').setInputFiles(filepath);
//    await page.locator(`//input[@id="file-submit"]`).click();
//    await expect(page.locator('text=File Uploaded!')).toBeVisible();


// })

test("user downloads the file",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download");
const downloadpromise= page.waitForEvent('download');
await page.locator(`text=ClassRoon-PW-W4-File Upload & Download.pdf`).click();
const download=await downloadpromise;
const downloadpath=path.join(__dirname,"download",await download.suggestedFilename());
await download.saveAs(downloadpath);
console.log("download file saved at:",downloadpath);
})