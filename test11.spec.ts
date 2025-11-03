import { test, expect } from '@playwright/test';
import fs from 'fs';

import { getRandomValues } from 'crypto';
import path from 'path';
// test.describe("open the website", () => {
//     test('has title', async ({ page }) => {
//         await page.goto('https://alphaplatform.net/Home/Alpha');
//         await page.locator("img[aria-label='Close']").click();
//         // await page.locator("img[alt='menu-square']").click();
//         await page.locator("div[id='header-action-buttons-desktop'] a:nth-child(2)").click();
//         await page.locator('#first-name').fill("raghad");
//         await page.locator('#last-name').fill("waleed");
//         await page.locator('#phone_input').fill("796906937");
//         await page.locator('#RegisterRequestInput_DynamicProperties_9ee5c65f-3d49-4097-a46a-33e8fed73cb4_').selectOption('الصف الأول');
//         await page.locator('#RegisterRequestInput_DynamicProperties_d0e3d013-f72e-eab1-72e4-3a1b734962d1_').selectOption('الصفوف الأساسية');
//         await page.locator('#password').fill("123456");
//         await page.locator('#re-password').fill("123456");
//         await page.locator("button[type='submit']").click();




//     });
// });
test.describe("open the website", () => {
    test('has title', async ({ page }) => {
        await page.goto('https://alphaplatform.net/Home/Alpha');
        await page.locator("img[aria-label='Close']").click();
        // await page.locator("img[alt='menu-square']").click();
        await page.locator("(//a[@role='button'][contains(text(),'دخول')])[2]").click();
        await page.locator('#phone_input').fill("+962796906937");
        await page.locator("button[type='submit']").click();
        await page.locator('#password').fill("123456");
        await page.locator("button[type='submit']").click();
        await page.locator("img[aria-label='Close']").click();
        await page.locator("#active-code-btn").click();
        await page.locator('#Input_Code').fill("744858030867");
        await page.locator("button[class='btn-activate']").click();
        await page.locator("#my-courses-btn-header").click();
        await page.locator("a[id='MenuItem_نقاط البيع']").click();
        //.alpha-text-title-xl
        // const logo = page.locator(".alpha-text-title-xl");
        // await expect(logo).toBeVisible();
await page.locator("a[id='MenuItem_Menu:Libraries']").click();
await page.locator("tbody tr:nth-child(1) td:nth-child(4)").click();
await page.pause();
//await page.locator("(//a[@class='alpha-btn alpha-btn-primary'][contains(text(),'تحميل')])[1]").click();
// Download file
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator("(//a[@class='alpha-btn alpha-btn-primary'][contains(text(),'تحميل')])[1]").click(),
        ]);

        const fileName = download.suggestedFilename();
        const downloadPath = path.join('downloads', fileName);
        await download.saveAs(downloadPath);

        // تحقق من نجاح التحميل
        await expect(fs.existsSync(downloadPath)).toBeTruthy();
        console.log(`✅ File "${fileName}" downloaded successfully`);
   

    });
});