import{test,chromium,firefox} from "@playwright/test";


// test("launch flipkart ",async()=>{
//  const browser = await firefox.launch();
//  const context = await browser.newContext();
//  const page = await context.newPage();

//  await page.goto("https://www.flipkart.com/");
//  const title = await page.title();
//  let url =  page.url();
//  console.log(title);
// console.log(url);
// });

test("launch redbus",async()=>{
    const browser = await chromium.launch({
    channel:"msedge"
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redbus.in/");
    const title = await page.title();
    let url = page.url();
    console.log("title",title);
    console.log("url",url);
    //await page.waitForTimeout(3000);
});