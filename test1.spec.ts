// import { test, expect } from '@playwright/test';
// import { getRandomValues } from 'crypto';
// test.describe("open the website", () => {
//     test('has title', async ({ page }) => {
//         await page.goto('https://alphaplatform.net/Home/Alpha');
//         const t = await page.title();
//         console.log(t);
//         await expect(page).toHaveTitle("منصة ألفا التعليمية");
//     });
//     test('close the pop', async ({ page }) => {
//        // await page.goto('https://alphaplatform.net/Home/Alpha');
//         await page.locator("img[aria-label='Close']").click();
//         const logo = page.locator("img[alt='Logo']");
//         await expect(logo).toBeVisible();
//     })

// });

// test.describe('SignUp', () => {

//     test('has title1', async ({ page }) => {
//          await page.goto('https://alphaplatform.net/Account/RegisterByPhoneAlphaTheme?ReturnUrl=&ReturnUrlHash=');
//         const u = await page.url();
//         console.log(u);
//         await expect(page).toHaveURL("https://alphaplatform.net/Account/RegisterByPhoneAlphaTheme?ReturnUrl=&ReturnUrlHash=");
//     });

//     test('has title2', async ({ page }) => {
//         await page.goto('https://alphaplatform.net/Account/RegisterByPhoneAlphaTheme?ReturnUrl=&ReturnUrlHash=');
//         await page.locator('#first-name').fill("raghad");
//         await page.locator('#last-name').fill("waleed");
//         await page.locator('#phone_input').fill("796906937");
//         await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول');
//         await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية');
//         await page.locator('#password').fill("raghad");
//         await page.locator('#re-password').fill("raghad");
//         await page.locator("button[type='submit']").click();
//         await expect(page).toHaveURL("https://alphaplatform.net/Account/RegisterByPhoneAlphaTheme?ReturnUrl=&ReturnUrlHash=");
//     });


// })
// test.describe('Login', () => {

//     test('has title3', async ({ page }) => {
//         await page.goto('https://alphaplatform.net/Account/LoginByPhoneAlphaTheme?ReturnUrl=');
//         const ui = await page.locator('.alpha-text-title-xl');
//         console.log(ui);
//         await expect(ui).toContainText('أهلا بك في ألفا');
//     });
//      test('has title4', async ({ page }) => {
//        await page.goto('https://alphaplatform.net/Account/LoginByPhoneAlphaTheme?ReturnUrl=');
//         await page.locator('#phone_input').fill("796906937");
//         await page.locator("button[type='submit']").click();
//      });
// });
