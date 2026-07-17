import { Page } from '@playwright/test'
import { loginLocators as L } from './login.locators';
 

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email: string){
        await this.page.getByTestId(L.emailInput).fill(email);
    }

    async fillPassword(password: string){
        await this.page.getByTestId(L.passwordInput).fill(password);
    }

    async clickLoginUser(){
        await this.page.getByTestId(L.submitButton).click();
    }

    async loginUser(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginUser();
    }
}