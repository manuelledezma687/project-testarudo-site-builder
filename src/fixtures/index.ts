import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login/login.two.page';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { Cookies } from '../components/cookiesModal/cookies';
import { navBar } from '../components/navBar/navBar';


type PageFixtures = {
      loginPage: LoginPage;
      dashboardPage: DashboardPage;
      menu: navBar;
      cookies: Cookies;
}

export const test = base.extend<PageFixtures> (
    {
        loginPage: async({ page }, use) => {
            await use(new LoginPage(page));
        },
        dashboardPage: async({ page }, use) => {
            await use(new DashboardPage(page));
        },
        menu: async({ page }, use) => {
            await use(new navBar(page));
        },
        cookies: async({ page }, use) => {
            await use(new Cookies(page));
        },
    }
);

export { expect } from '@playwright/test';