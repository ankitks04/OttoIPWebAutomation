import { test, expect } from "@playwright/test";

test.setTimeout(120000);

test("login test", async ({ page }) => {
    await page.goto("https://filehistory.bhip-dev.com/login");

    await page.locator("#login-email").fill("ottoip_test5@admin.com");
    // await page.fill("#username", "ottoip_test5@admin.com");

    await page.locator("//input[@id='login-password']").fill("CAjboQMDYzMD");
    // await page.fill("#password", "CAjboQMDYzMD");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByText("Skip").click({
        timeout: 80000,
    });

    await page.locator("//html/body/div/div[1]/div[2]/button").click({
        timeout: 80000,
    });

    await expect(page).toHaveURL("https://filehistory.bhip-dev.com/");
    await expect(page).toHaveTitle("Otto IP");

    await expect(page.getByText("OttoIPProfessional Plan")).toBeVisible({
        timeout: 90000,
    });

    await page.locator("#root > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button").click({
        timeout: 80000,
    });

    //await page.getByText("Dev-Ankit-testt9__Test39").click({
    //  timeout: 6000,
    // });

    await page.locator("button").nth(5).click({
        timeout: 90000,
    });

    await page.getByRole("button", { name: "Yes" }).click();

    await page.pause();

});