const puppeteer=require('puppeteer');
const demo=require('../../lib/browserConfig');
const loginModule=require('../../lib/loginModule');
const navigationBar=require('../../pages/NavigationBar');

require('dotenv').config();

describe('As a user I have to see respective gender products when a gender is clicked in search UI', () => {
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

    it('should be able to login and search for product for Men',async()=>{
        await page.goto(process.env.URL);
        // await page.waitForNavigation();
        loginModule.login(page);
        await page.waitFor(4000);
        
        let [search]=await page.$x(navigationBar.SEARCH_XPATH);
        await page.waitFor(4000);

        search.click();
        
    });

})
