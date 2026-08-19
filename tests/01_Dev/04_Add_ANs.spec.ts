import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('test', async ({ page }) => {

  await page.goto('https://filehistory.bhip-dev.com/login?redirect=%2F');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ottoip_test5@admin.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('CAjboQMDYzMD');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Skip Tour' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).first().click();

  //If WS has already some AN added
  //await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();


  //await page.getByPlaceholder('Search application').locator('xpath=following-sibling::button[1]').click();


  // new code
  await page.getByPlaceholder('Search application').locator('xpath=following-sibling::button[last()]').click();

  //IF no AN added in WS
  //await page.locator("//html/body/div/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/div/div/ul/div/form/button[3]").click();
  await page.getByRole('button', { name: 'BHIP Integrated' }).click();
  await page.getByText('Schwegman, Lundberg, Woessner').click();
  await page.getByRole('button', { name: 'Clear Docket' }).click();
  await page.getByRole('textbox', { name: 'e.g. 16954171' }).click();
  await page.getByRole('textbox', { name: 'e.g. 16954171' }).fill('18946271');
  await page.getByRole('button', { name: 'Search' }).click({
    timeout: 80000,
  });

  // await page.getByRole("row").nth(1).click({
  // timeout: 80000,
  // });

  const results = page.getByRole("dialog", { name: "Add Application Data" });
  await results.getByRole("row", { name: /18946271/ }).click();
  //await results.getByRole("row", { name: /18946271/ }).getByRole("checkbox").click();

  await expect(results.getByRole("button", { name: "Add Selected" })).toBeEnabled();
  await results.getByRole("button", { name: "Add Selected" }).click();
  await page.locator("//html/body/div/div[1]/div[2]/button").click({
    timeout: 80000,
  });
  //await page.getByRole('button').filter({ hasText: /^$/ }).first().click();

  await page.getByRole('button', { name: 'US 18369711' }).click();
  await expect(page.getByText('References32')).toBeEnabled();
  await page.getByText('References32').click();

  //await expect(page.getByText("Workspace created successfully!")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Reference Documents" })).toBeVisible({
    timeout: 80000,
  });

});