import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { DashboardPage } from '../src/pages/dashboard.page';
import { Cookies } from '../src/components/cookiesModal/cookies';
import { navBar } from '../src/components/navBar/navBar';
import users from '../src/test-data/users.json';


test.describe('Login in Testarudo platform', () => {

  let login: LoginPage;
  let dashboard: DashboardPage;
  let menu: navBar;
  let cookies: Cookies;

  test.beforeEach( async({page}) => {
    login = new LoginPage(page);
    cookies = new Cookies(page);
    menu = new navBar(page);
    dashboard = new DashboardPage(page);
    await page.goto('');
    await cookies.clickAcceptCookies();
    await menu.clickLoginSection();
  });

  test('Test login Admin', async () => {
  await login.loginUser(users.adminUser.email,users.adminUser.password);
  await dashboard.isAdminPanel();
});

  test('Test login User', async () => {
  await login.loginUser(users.StudentUser.email,users.StudentUser.password);
  await dashboard.isStudentPanel();
});

  test('Test login Admin URL', async () => {
  await login.loginUser(users.adminUser.email,users.adminUser.password);
  await dashboard.isAdminLogged();
});

test('Test login User URL', async () => {
  await login.loginUser(users.StudentUser.email,users.StudentUser.password);
  await dashboard.isStudentLogged();
});

});