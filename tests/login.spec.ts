import { expect, test } from '../src/fixtures/index';
import users from '../src/test-data/users.json';

const password = {
  admin: process.env.ADMIN_PASSWORD!,
  student: process.env.STUDENT_PASSWORD!,
}


test.describe('Login in Testarudo platform', () => {


  test.beforeEach( async({page , cookies, menu}) => {
    await page.goto('');
    await cookies.clickAcceptCookies();
    await menu.clickLoginSection();
  });

  test('Test login Admin', async ({ loginPage, dashboardPage } ) => {
  await loginPage.loginUser(users.adminUser.email,password.admin);
  await dashboardPage.isAdminPanel();
});

  test('Test login User', async ({ loginPage, dashboardPage } ) => {
  await loginPage.loginUser(users.StudentUser.email,password.student);
  await dashboardPage.isStudentPanel();
});

  test.only('Test login Admin URL', async ({ loginPage, dashboardPage,page } ) => {
  await loginPage.loginUser(users.adminUser.email,password.admin);
  await dashboardPage.isAdminLogged();
});

test('Test login User URL', async ({ loginPage, dashboardPage } ) => {
  await loginPage.loginUser(users.StudentUser.email,password.student);
  await dashboardPage.isStudentLogged();
});

test('Test login Admin Contains Welcome message', async ({ loginPage, dashboardPage } ) => {
  await loginPage.loginUser(users.adminUser.email,password.admin);
  await dashboardPage.isAdminContainTheText("Panel de administración");
});

});

test.describe('Login Snapshot', () => {

test('Test login Snapshot HTML', async ({ page, cookies, menu } ) => {
  await page.goto('');
  await cookies.clickAcceptCookies();
  await menu.clickLoginSection();
  const form = page.locator('form').first();
  const html = await form.innerHTML();
  expect(html).toMatchSnapshot('loginpage.html');

});

test('Test login Snapshot PNG', async ({ page,cookies, menu } ) => {
  await page.goto('');
  await cookies.clickAcceptCookies();
  await menu.clickLoginSection();
  const submitButton = page.getByTestId('auth-submit');
  await expect(submitButton).toHaveScreenshot('loginpage.png');
});

  });