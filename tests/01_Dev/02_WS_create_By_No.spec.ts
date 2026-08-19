import { test, expect } from "@playwright/test";

test.setTimeout(120000);

test("login test", async ({ page }) => {


    //await page.goto("https://filehistory.bhip-dev.com/login");
    await page.goto(" https://otto-ip-web-v2-preprod-525bc28b096e.herokuapp.com/login");


    //await page.locator("#login-email").fill("ottoip_test5@admin.com");
    await page.locator("#login-email").fill("contata-tester3@blackhillsip.com");

    //await page.locator("//input[@id='login-password']").fill("CAjboQMDYzMD");
    await page.locator("//input[@id='login-password']").fill("PZbnIebcCJfx");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByText("Skip").click({
        timeout: 80000,
    });

    await page.locator("//html/body/div/div[1]/div[2]/button").click({
        timeout: 80000,
    });

    //await expect(page).toHaveURL("https://filehistory.bhip-dev.com/");
    //await expect(page).toHaveTitle("Otto IP");

    //await expect(page.getByText("OttoIPProfessional Plan")).toBeVisible({
    // timeout: 90000,
    //});

    await page.locator("#root > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div:nth-of-type(2) > button").click({
        timeout: 80000,
    });

    //await page.getByText("Dev-Ankit-testt9__Test39").click({
    //  timeout: 6000,
    // });

    await page.locator("button").nth(5).click({
        timeout: 90000,
    });

    await page.getByRole("button", { name: "No" }).click();

    await page.locator("#input-matter-number").fill("123456789");

    await page.getByRole("combobox").click({
        timeout: 70000,
    });


    //await page.getByRole("option", { name: "General" }).click({
    await page.getByRole("option", { name: "Default" }).click({
        //await page.getByText("General").click({

        //await page.locator("#radix-_r_nb_").click({
        timeout: 70000,
    });

    const dialog = page.getByRole("dialog", { name: "Add Workspace" });
    await dialog.getByRole("button", { name: "Save" }).click();

    await expect(page.getByText("Workspace created successfully!")).toBeVisible({
        timeout: 90000,
    });


    await page.pause();

});