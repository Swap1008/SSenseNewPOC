const puppeteer=require('puppeteer');
const demo=require('../../lib/browserConfig');
const loginModule=require('../../lib/loginModule');
const navigationBar=require('../../pages/NavigationBar');

require('dotenv').config();

describe('Scenario 1', () => {
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

    it('User can move up/down the suggested brands in search box using keyboard arrow keys',async()=>{
        await page.goto(process.env.URL);
        // await page.waitForNavigation();
        loginModule.login(page);
        await page.waitFor(2000);
        // await page.waitForNavigation();
        await page.waitFor(2000);
        await page.click(navigationBar.MEN_LINK);
    });

})
