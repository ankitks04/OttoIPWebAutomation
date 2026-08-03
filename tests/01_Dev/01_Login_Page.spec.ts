import { test, expect } from "@playwright/test";

test("login test", async ({ page }) => {
    // 'page' is automatically created for you
    // Playwright already launched a browser, created a context, and opened this page

    await page.goto("https://filehistory.bhip-dev.com/login");
    await page.fill("#username", "ottoip_test5@admin.com");
    await page.fill("#password", "CAjboQMDYzMD");
    await page.click("#login-btn");

    let title = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveURL("https://filehistory.bhip-dev.com/");
    console.log("URL verified ✅");
});