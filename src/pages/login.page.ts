import { Page } from '@playwright/test'
 

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string){
        await this.page.getByTestId('auth-email').fill(email);
    }

    async fillPassword(password: string){
        await this.page.getByTestId('auth-password').fill(password);
    }

    async clickLoginUser(){
        await this.page.getByTestId('auth-submit').click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginUser();
    }
}