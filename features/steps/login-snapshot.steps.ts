import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../src/fixtures/index';

const { Then } = createBdd(test);

Then('the login form HTML should match the stored {string} snapshot', async ({ page }, name: string) => {
  const form = page.locator('form').first();
  const html = await form.innerHTML();
  expect(html).toMatchSnapshot(name);
});

Then('the login submit button should match the stored {string} screenshot', async ({ page }, name: string) => {
  const submitButton = page.getByTestId('auth-submit');
  await expect(submitButton).toHaveScreenshot(name);
});
