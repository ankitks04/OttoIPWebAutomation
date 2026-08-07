import { test, expect } from "@playwright/test";

//test.setTimeout(120000);

test("login test", async ({ page }) => {
    // 'page' is automatically created for you
    // Playwright already launched a browser, created a context, and opened this page

    await page.goto("https://filehistory.bhip-dev.com/login");

    await page.locator("#login-email").fill("ottoip_test5@admin.com");
    // await page.fill("#username", "ottoip_test5@admin.com");

    await page.locator("//input[@id='login-password']").fill("CAjboQMDYzMD");
    // await page.fill("#password", "CAjboQMDYzMD");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByText("Skip").click({
        timeout: 80000,
    });

    await expect(page).toHaveURL("https://filehistory.bhip-dev.com/");
    await expect(page).toHaveTitle("Otto IP");

    await expect(page.getByText("OttoIPProfessional Plan")).toBeVisible({
        timeout: 90000,
    });

    await page.pause();

    console.log("URL verified âœ…");
});
