const puppeteer=require('puppeteer');
const demo=require('../../lib/browserConfig');
const loginModule=require('../../lib/loginModule');
require('dotenv').config();

describe('Recursive Test', () => {
    let browser;
    let page;

    before(async()=>{
        browser = await puppeteer.launch(demo.browserProp);
        page = await browser.newPage();
        await page.setViewport(demo.pageConfig);
    });
    after(async()=>{
        // await browser.close();
    })

    it('Test1',async()=>{
        await page.goto(process.env.URL);
        loginModule.login(page);
    });

})
