import { test, expect } from '@playwright/test';
test.describe("Login Module", () => {

    test('Verify error message when user enters empty phone', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill(" "); //phone
        //     await page.pause();
        await page.locator("button[type='submit']").click(); //enter
        const exepected = page.locator("#mobile-error");
        await expect(exepected).toBeVisible();
    });

    test('Verify login with valid phone and valid password', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("+962796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        await page.locator("#password").fill("123456");  //password
        await page.locator("button[type='submit']").click(); //Submit_Button
        await page.locator("img[aria-label='Close']").click(); //pop
        const exepected = page.locator("#my-courses-div-header");
        await expect(exepected).toBeVisible();
    });


    test('Verify login with invalid phone and valid password', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        const exepected = page.locator(".alpha-text-title-xl");
        await expect(exepected).toBeVisible();
    });
    test('Verify login with valid phone and invalid password', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("+962796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        await page.locator("#password").fill("0123456");  //password
        await page.locator("button[type='submit']").click(); //Submit_Button
        const exepected = page.locator("#account-name");
        await expect(exepected).toBeVisible();
    });

    test('Toggle password visibility (View Password)', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("+962796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        await page.locator("#password").fill("123456");  //password
        await page.locator("#toggle-password").click(); //toggle pass
        //    await page.pause()
        await page.locator("button[type='submit']").click(); //Submit_Button
        await page.locator("img[aria-label='Close']").click(); //pop
        const exepected = page.locator("#my-courses-div-header");
        await expect(exepected).toBeVisible();
    });
    test('Verify successful password reset flow using a registered phone number', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("+962796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        await page.locator("a[class='alpha-btn-nav']").click();  //reset_password
        const exepected = page.locator(".alpha-text-title-xl");
        await expect(exepected).toBeVisible();
    });
    test('Verify error message when user enters an unregistered phone number in the “Forgot Password” flow.', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click(); //Login Button
        await page.locator("#phone_input").fill("+962796906937"); //phone
        await page.locator("button[type='submit']").click(); //enter
        await page.locator("a[class='alpha-btn-nav']").click();  //reset_password
        await page.locator("#update-mobile-btn").click();  //change phone num
        //   await page.pause()
        await page.locator("#phone_input").fill("+962787906937"); //phone    
        await page.locator("button[type='submit']").click(); //enter
        const exepected = page.locator(".alpha-text-title-xl");
        await expect(exepected).toBeVisible();
    });


})


test.describe("Register Module", () => {

    test('Verify create new account with valid credentials', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'إنشاء حساب')])[2]").click(); //Register Button
        await page.locator('#first-name').fill("raghad"); //first name
        await page.locator('#last-name').fill("waleed"); //last name
        await page.locator('#phone_input').fill("796906937"); // phone num
        await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول'); //grade
        await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية'); // 7aqel
        await page.locator('#password').fill("raghad"); //pass
        await page.locator('#re-password').fill("raghad"); //re-pass
        await page.locator("button[type='submit']").click(); //create
        await expect(page).toHaveURL("https://alphaplatform.net/Account/RegisterByPhoneAlphaTheme?ReturnUrl=&ReturnUrlHash=");
    });

    test('Verify system prevents creatin with a phone number linked to multiple accounts', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'إنشاء حساب')])[2]").click(); //Register Button
        await page.locator('#first-name').fill("raghad"); //first name
        await page.locator('#last-name').fill("waleed"); //last name
        await page.locator('#phone_input').fill("796906937"); // phone num
        await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول'); //grade
        await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية'); // 7aqel
        await page.locator('#password').fill("raghad"); //pass
        await page.locator('#re-password').fill("raghad"); //re-pass
        // await page.pause()
        await page.locator("button[type='submit']").click(); //create
        const exepected = page.locator("div[class='step-1'] h2[class='alpha-text-title-xl']");
        await expect(exepected).toBeVisible();

    });

    test('Verify system prevents creatin when mismatch in Password and Confirm Password', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'إنشاء حساب')])[2]").click(); //Register Button
        await page.locator('#first-name').fill("raghad"); //first name
        await page.locator('#last-name').fill("waleed"); //last name
        await page.locator('#phone_input').fill("796906937"); // phone num
        await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول'); //grade
        await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية'); // 7aqel
        await page.locator('#password').fill("raghad"); //pass
        await page.locator('#re-password').fill("raghad222"); //re-pass
        await page.pause()
        await page.locator("button[type='submit']").click(); //create
        const exepected = page.locator("//span[contains(text(),'يجب مطابقة كلمة المرور في الحقلين')]");
        await expect(exepected).toBeVisible();
    });

    test('Verify system prevents creatin when leave any required field empty like last-name', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click(); //pop
        await page.locator("(//a[@role='button'][contains(text(),'إنشاء حساب')])[2]").click(); //Register Button
        await page.locator('#first-name').fill("raghad"); //first name
        await page.locator('#last-name').fill(""); //last name
        await page.locator('#phone_input').fill("796906937"); // phone num
        await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول'); //grade
        await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية'); // 7aqel
        await page.locator('#password').fill("raghad"); //pass
        await page.locator('#re-password').fill("raghad"); //re-pass
        await page.pause()
        await page.locator("button[type='submit']").click(); //create
        const exepected = page.locator("//div[@class='user-name']//div[2]//span[1]");
        await expect(exepected).toBeVisible();
    });
});