const loginPage=require("../pages/Login-SignUp-Page");

module.exports = {
  login: async page => {
    // await page.waitFor(2000);
    await page.click("#login-link");
    await page.waitForNavigation();
    await page.type(loginPage.EMAIL, "clarionone@test.com");
    await page.waitFor(1000);
    await page.type(loginPage.PASSWORD, "123456");
    await page.waitFor(1000);
    await page.click(loginPage.LOGIN_BTN);
    // let [pass] = await page.$x(loginPage.FORGOTPASSWORD);
    // pass.click();
  }
};
