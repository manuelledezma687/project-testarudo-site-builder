import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/index';
import { getCredentials, UserRole } from '../../src/test-data/credentials';

const { Given, When, Then } = createBdd(test);

Given('I am on the Testarudo home page', async ({ page }) => {
  await page.goto('');
});

Given('I accept the cookies', async ({ cookies }) => {
  await cookies.clickAcceptCookies();
});

Given('I open the login section', async ({ menu }) => {
  await menu.clickLoginSection();
});

When('I log in as {string}', async ({ loginPage }, role: UserRole) => {
  const { email, password } = getCredentials(role);
  await loginPage.loginUser(email, password);
});

Then('I should see the {string} panel', async ({ dashboardPage }, role: UserRole) => {
  if (role === 'admin') {
    await dashboardPage.isAdminPanel();
  } else {
    await dashboardPage.isStudentPanel();
  }
});

Then('I should be redirected to the {string} URL', async ({ dashboardPage }, role: UserRole) => {
  if (role === 'admin') {
    await dashboardPage.isAdminLogged();
  } else {
    await dashboardPage.isStudentLogged();
  }
});

Then('the admin panel heading should contain the text {string}', async ({ dashboardPage }, message: string) => {
  await dashboardPage.isAdminContainTheText(message);
});
