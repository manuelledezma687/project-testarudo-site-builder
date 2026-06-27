import { expect, Page } from '@playwright/test'
 

export class DashboardPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isAdminLogged() {
        await expect(this.page).toHaveURL('https://staging.testertestarudo.com/es/admin');
    }

    async isStudentLogged() {
        await expect(this.page).toHaveURL('https://staging.testertestarudo.com/es/dashboard');
    }

    async isAdminPanel() {
        await expect(this.page.getByRole('heading', { name: 'Panel de administración' })).toBeVisible();
    }

    async isStudentPanel() {
       await expect(this.page.getByRole('heading', { name: 'Mi Panel' })).toBeVisible();
    }


}