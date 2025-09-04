import { test, expect } from 'playwright/test';

test.beforeEach('the first test', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard', {
        waitUntil: 'networkidle',
    });
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('User facing locators', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).first().click();
    await page.getByRole('button', { name: 'Sign in' }).first().click();
    await page.getByLabel('Email').first().click();
    await page.getByPlaceholder('Jane Doe').click();
    await page.getByText('Using the Grid').click();
    //await page.getByTitle('IoT Dashboard').click();
    await page.getByTestId('SignIn').click();
});
test('child element', async ({ page }) => {
    await page.locator('nb-radio', { hasText: 'Option 1' }).click();
    await page.getByText('Option 2').click();
    await page
        .locator('nb-card')
        .getByRole('button', { name: 'Sign in' })
        .first()
        .click();
    await page.locator('nb-card').nth(3).getByRole('button').click();
});
test('locating parent element', async ({ page }) => {
    await page
        .locator('nb-card', { hasText: 'Using the Grid ' })
        .getByRole('textbox', { name: 'Email' })
        .click();
    await page
        .locator('nb-card', { has: page.locator('#inputEmail1') })
        .getByRole('textbox', { name: 'Email' })
        .click();
    await page
        .locator('nb-card')
        .filter({ hasText: 'Basic Form' })
        .getByRole('textbox', { name: 'Email' })
        .click();
});
test('Reusing the locators', async ({ page }) => {
    const basicForm = page.locator('nb-card').filter({ hasText: 'Basic Form' });
    const emailField = basicForm.getByRole('textbox', { name: 'Email' });
    await emailField.fill('test@takeLast.com');
    await basicForm
        .getByRole('textbox', { name: 'Password' })
        .fill('Welcome123');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click();
    await expect(emailField).toHaveValue('test@takeLast.com');
});
